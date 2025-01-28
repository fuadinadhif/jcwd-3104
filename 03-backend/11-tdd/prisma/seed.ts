import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  try {
    await prisma.user.createMany({
      data: [
        { firstName: "John", lastName: "Doe", email: "john.doe@mail.com" },
        { firstName: "Jane", lastName: "Smith", email: "jane.smith@mail.com" },
      ],
    });

    console.info("Seed created 🌱");
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();

// seed()
//   .then(() => console.info("Seed created 🌱"))
//   .catch((error) => console.error(error)).finally(() => prisma.$disconnect())
