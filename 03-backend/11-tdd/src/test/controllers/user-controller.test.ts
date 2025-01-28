import request from "supertest";
import { PrismaClient } from "@prisma/client";

import app from "../../app";

const prisma = new PrismaClient();

describe("GET /api/v1/users", () => {
  const sampleUsers = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@test.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@test.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  // Run the logic before all of the test case
  beforeAll(async () => {
    await prisma.$connect();
  });

  // Run the logic before each test
  beforeEach(async () => {
    await prisma.user.createMany({
      data: sampleUsers,
    });
  });

  // Run the logic after each test
  afterEach(async () => {
    await prisma.user.deleteMany();
  });

  // Run the logic after all test
  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should return an array of users", async () => {
    const response = await request(app).get("/api/v1/users");

    expect(response.status).toBeGreaterThanOrEqual(200);
    expect(response.status).toBeLessThanOrEqual(299);
    expect(response.body).toMatchObject({
      ok: true,
      data: sampleUsers.map((item) => ({
        id: item.id,
        firstName: item.firstName,
        lastName: item.lastName,
        email: item.email,
      })),
    });
  });

  it("should return 404 status", async () => {
    const response = await request(app).get("/api/v1/user");

    expect(response.status).toBe(404);
  });
});
