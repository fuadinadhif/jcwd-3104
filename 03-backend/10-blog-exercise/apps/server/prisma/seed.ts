import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import crypto from "crypto";

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.receipt.deleteMany();
  await prisma.transaction.deleteMany();
  await prisma.confirmToken.deleteMany();
  await prisma.point.deleteMany();
  await prisma.coupon.deleteMany();
  await prisma.voucher.deleteMany();
  await prisma.wallet.deleteMany();
  await prisma.categoryPost.deleteMany();
  await prisma.post.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();

  // Create Users
  const passwordHash = await bcrypt.hash("password123", 10);
  const users = await prisma.user.createMany({
    data: [
      {
        name: "Alice",
        username: "alice123",
        password: passwordHash,
        email: "alice@example.com",
        emailConfirmed: true,
        referralCode: "REF123",
      },
      {
        name: "Bob",
        username: "bob456",
        password: passwordHash,
        email: "bob@example.com",
        emailConfirmed: true,
        referralCode: "REF456",
      },
      {
        name: "Charlie",
        username: "charlie789",
        password: passwordHash,
        email: "charlie@example.com",
        emailConfirmed: true,
        referralCode: "REF789",
      },
    ],
    skipDuplicates: true,
  });

  const userList = await prisma.user.findMany();

  // Create Categories
  const categories = await prisma.category.createMany({
    data: [
      { name: "Tech", description: "Tech related posts", image: "tech.jpg" },
      {
        name: "Lifestyle",
        description: "Lifestyle tips and guides",
        image: "lifestyle.jpg",
      },
      {
        name: "Finance",
        description: "Finance insights",
        image: "finance.jpg",
      },
    ],
    skipDuplicates: true,
  });

  const categoryList = await prisma.category.findMany();

  // Create Posts
  const posts = await prisma.post.createMany({
    data: userList.map((user, index) => ({
      title: `Post Title ${index + 1}`,
      excerpt: `Excerpt of post ${index + 1}`,
      content: `Content of post ${index + 1}`,
      image: `post${index + 1}.jpg`,
      userId: user.id,
      price: 50000 * (index + 1),
    })),
    skipDuplicates: true,
  });

  const postList = await prisma.post.findMany();

  // Create CategoryPost relationships
  await Promise.all(
    postList.map((post, index) =>
      prisma.categoryPost.create({
        data: {
          postId: post.id,
          categoryId: categoryList[index % categoryList.length].id,
        },
      })
    )
  );

  // Create Wallets
  await Promise.all(
    userList.map((user) =>
      prisma.wallet.create({
        data: {
          userId: user.id,
          balance: 1_000_000,
        },
      })
    )
  );

  // Create Transactions
  const transactions = await Promise.all(
    userList.map((user, index) =>
      prisma.transaction.create({
        data: {
          userId: user.id,
          postId: postList[index % postList.length].id,
          amount: 50000 * (index + 1),
        },
      })
    )
  );

  // Create ConfirmTokens
  await Promise.all(
    userList.map((user) =>
      prisma.confirmToken.create({
        data: {
          token: crypto.randomBytes(20).toString("hex"),
          expiredDate: new Date(Date.now() + 1000 * 60 * 60 * 24),
          userId: user.id,
        },
      })
    )
  );

  // Create Points
  await Promise.all(
    userList.map((user) =>
      prisma.point.create({
        data: {
          balance: 20000,
          // expiredDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
          userId: user.id,
        },
      })
    )
  );

  // Create Coupons
  await Promise.all(
    userList.map((user, index) =>
      prisma.coupon.create({
        data: {
          code: `COUPON${index + 1}`,
          discountRate: 10,
          used: false,
          userId: user.id,
          expiredDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
        },
      })
    )
  );

  // Create Vouchers
  await Promise.all(
    postList.map((post, index) =>
      prisma.voucher.create({
        data: {
          code: `VOUCHER${index + 1}`,
          discountRate: 15,
          postId: post.id,
          expiredDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
        },
      })
    )
  );

  // Create Receipts
  await Promise.all(
    transactions.map((transaction, index) =>
      prisma.receipt.create({
        data: {
          receiptCode: `RECEIPT${index + 1}`,
          receiptTotal: transaction.amount,
          transactionId: transaction.id,
        },
      })
    )
  );

  console.log("Seed data successfully inserted");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
