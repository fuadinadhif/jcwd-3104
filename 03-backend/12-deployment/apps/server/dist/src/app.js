"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const prisma_1 = __importDefault(require("./configs/prisma"));
const app = (0, express_1.default)();
const PORT = 8000;
app.use(express_1.default.json());
app.get("/api/v1", (req, res) => {
    res.status(200).json({ message: "API Connected!" });
});
app.get("/api/v1/users", async (req, res) => {
    try {
        const users = await prisma_1.default.user.findMany();
        res.status(200).json({ ok: true, data: users });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "General error. Good luck!" });
    }
});
app.post("/api/v1/users", async (req, res) => {
    try {
        const { name, email } = req.body;
        await prisma_1.default.user.create({
            data: { name: name, email: email },
        });
        res.status(201).json({ ok: true, message: "User created!" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "General error. Good luck!" });
    }
});
app.listen(PORT, () => {
    console.info(`Server is listening on port: ${PORT}`);
});
exports.default = app;
