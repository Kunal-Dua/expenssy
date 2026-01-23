import express from "express";
import { userSignIn, userSignUp, userUpdate } from "../schemas/userSchema.js";
import { prisma } from "../lib/prisma.js";
import jwt from "jsonwebtoken";
import { authMiddleware } from "../middleware/authMiddlewares.js";

const userRouter = express.Router();

userRouter.get("/me", authMiddleware, async (req, res) => {
    res.status(200).json({
        exists: true,
        user: {
            userid: req.userid,
        },
    });
});

userRouter.post("/signup", async (req, res) => {
    const bodyParsed = userSignUp.safeParse(req.body);
    if (!bodyParsed.success) {
        return res.status(411).json({
            msg: "Incorrect inputs",
        });
    }

    const existingUser = await prisma.user.findUnique({
        where: {
            email: bodyParsed.data.email,
        },
    });

    if (existingUser) {
        return res.status(411).json({
            msg: "Email already taken / Incorrect inputs",
        });
    }

    const user = await prisma.user.create({
        data: {
            email: bodyParsed.data.email,
            firstName: bodyParsed.data.firstName,
            lastName: bodyParsed.data.lastName,
            password: bodyParsed.data.password,
        },
    });

    const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET!);
    return res.json(token);
});

userRouter.post("/signin", async (req, res) => {
    const bodyParsed = userSignIn.safeParse(req.body);

    if (!bodyParsed.success) {
        return res.status(411).json({
            msg: "Incorrect inputs",
        });
    }

    const user = await prisma.user.findUnique({
        where: {
            email: bodyParsed.data.email,
            password: bodyParsed.data.password,
        },
    });

    if (!user) {
        return res.status(403).json({
            error: "User not found",
        });
    }

    const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET!);
    return res.json(token);
});

userRouter.put("/", authMiddleware, async (req, res) => {
    const bodyParsed = userUpdate.safeParse(req.body);

    if (!bodyParsed.success) {
        return res.status(411).json({
            msg: "Incorrect inputs",
        });
    }

    try {
        await prisma.user.update({
            where: { id: req.userid },
            data: bodyParsed.data,
        });
        return res.status(200).json("Updated succesfully");
    } catch (err) {
        return res.status(600).json("Interna server error");
    }
});

export { userRouter };
