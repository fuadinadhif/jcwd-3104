import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Delete all existing data
  await prisma.branch.deleteMany();
  await prisma.manager.deleteMany();
  await prisma.laptop.deleteMany();

  // Create branches
  const BSD = await prisma.branch.create({
    data: {
      name: "BSD",
      location: "Tangerang Selatan",
    },
  });

  const JKT = await prisma.branch.create({
    data: {
      name: "JKT",
      location: "Jakarta Selatan",
    },
  });

  const SBY = await prisma.branch.create({
    data: { name: "SBY", location: "Surabaya" },
  });

  // Create managers
  const BSDManager = await prisma.manager.create({
    data: {
      name: "Uli",
      branchId: BSD.id,
    },
  });

  const JKTManager = await prisma.manager.create({
    data: {
      name: "Riri",
      branchId: JKT.id,
    },
  });

  const SBYManager = await prisma.manager.create({
    data: {
      name: "Jerry",
      branchId: SBY.id,
    },
  });

  // Create laptops
  await prisma.laptop.createMany({
    data: [
      { brand: "Dell", barcode: "D123", managerId: JKTManager.id },
      { brand: "HP", barcode: "H123", managerId: SBYManager.id },
      { brand: "HP", barcode: "H345", managerId: BSDManager.id },
      { brand: "MacBook", barcode: "M123", managerId: JKTManager.id },
    ],
  });

  console.log("Seed data has been created successfully! 🌱");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
  });
