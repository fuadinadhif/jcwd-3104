import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

// import prisma from "../configs/prisma";

const prisma = new PrismaClient();

export async function getAllTransaction(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const transactions = await prisma.transaction.findMany();
    res.status(200).json({ ok: true, data: transactions });
  } catch (error) {
    next(error);
  }
}

export async function createTransaction(
  req: Request,
  res: Response,
  next: NextFunction
) {
  /*
  1. Check if post exist
  2. Get buyer (reader) and post owner (author)
  3. Check if valid voucher used
  4. Check if valid coupon used
  5. Check if valid points used
  6. Check if buyer has enough balance
  7. Peform transaction
  8. Record transaction
  */
  try {
    const { postId, points, voucherCode, couponCode } = req.body;

    if (!req.user) {
      res.status(401).json({ message: "Please login first!" });
      return;
    }

    // Step 1
    const post = await prisma.post.findUnique({
      where: { id: +postId },
    });

    if (!post) {
      res.status(404).json({ message: "Post not found" });
      return;
    }

    // Step 2
    const buyer = await prisma.user.findUnique({
      where: { id: req.user.id },
      include: { Wallet: true, Coupon: true, Point: true },
    });

    if (!buyer) {
      res.status(404).json({ message: "Buyer ID not found" });
      return;
    }

    const owner = await prisma.user.findUnique({
      where: { id: post.userId },
    });

    if (!owner) {
      res.status(404).json({ message: "Owner ID not found" });
      return;
    }

    // Step 3
    let finalPrice = post.price.toNumber();

    if (voucherCode && finalPrice > 0) {
      const validVoucher = await prisma.voucher.findUnique({
        where: {
          code: voucherCode,
          stock: { gt: 0 },
          expiredDate: { gt: new Date() },
        },
      });

      if (!validVoucher) {
        res.status(404).json({ message: "Invalid voucher" });
        return;
      }

      finalPrice = finalPrice - finalPrice * (validVoucher.discountRate / 100);

      await prisma.voucher.update({
        where: { code: voucherCode },
        data: { stock: { decrement: 1 } },
      });
    }

    // Step 4
    if (couponCode && finalPrice > 0) {
      const validCoupon = await prisma.coupon.findUnique({
        where: {
          code: couponCode,
          used: false,
          expiredDate: { gt: new Date() },
        },
      });

      if (!validCoupon) {
        res.status(404).json({ message: "Invalid coupon" });
        return;
      }

      finalPrice = finalPrice - finalPrice * (validCoupon.discountRate / 100);

      await prisma.coupon.update({
        where: { code: couponCode },
        data: { used: true },
      });
    }

    // Step 5
    if (points && finalPrice > 0) {
      const validPoint = await prisma.point.findUnique({
        where: { id: req.user.id, balance: { gt: 0 } },
      });

      if (!validPoint) {
        res.status(404).json({ message: "Invalid point" });
        return;
      }

      const maxPointToUse = Math.min(points, finalPrice);

      finalPrice = finalPrice - maxPointToUse;

      await prisma.point.update({
        where: { userId: req.user.id },
        data: { balance: validPoint.balance - maxPointToUse },
      });
    }

    // Step 6
    if (
      buyer.Wallet?.balance &&
      buyer.Wallet?.balance.toNumber() < finalPrice
    ) {
      res.status(400).json({ message: "Insufficient wallet balance" });
      return;
    }

    // Step 7
    await prisma.wallet.update({
      where: { userId: req.user.id },
      data: { balance: { decrement: finalPrice } },
    });

    await prisma.wallet.update({
      where: { userId: post.id },
      data: { balance: { increment: finalPrice } },
    });

    // Step 8
    const transaction = await prisma.transaction.create({
      data: {
        userId: req.user.id,
        postId: post.id,
        amount: finalPrice,
      },
    });

    const receipt = await prisma.receipt.create({
      data: {
        receiptCode: `RECEIPT-${post.id}-${String(new Date().getTime()).slice(
          0,
          5
        )}`,
        receiptTotal: finalPrice,
        transactionId: transaction.id,
      },
    });

    res.status(201).json({ ok: true, data: { transaction, receipt } });
  } catch (error) {
    next(error);
  }
}
