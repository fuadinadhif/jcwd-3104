import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(3, "Name must be 3 characters or more"),
  username: z.string(),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["AUTHOR", "ADMIN", "READER"]),
});
