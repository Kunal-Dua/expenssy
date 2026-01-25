import express from "express";
import { prisma } from "../lib/prisma.js";
import { authMiddleware } from "../middleware/authMiddlewares.js";
import {
    addCategory,
    addExpense,
    deleteCategory,
    deleteExpense,
    editCategory,
    editExpense,
    getCategory,
} from "../schemas/trackerSchema.js";

const trackerRouter = express.Router();

trackerRouter.use(authMiddleware);

trackerRouter.post("/addCategory", async (req, res) => {
    const bodyParsed = addCategory.safeParse(req.body);
    if (!bodyParsed.success) {
        return res.status(411).json({
            msg: "Incorrect inputs",
        });
    }

    const category = await prisma.category.create({
        data: {
            name: bodyParsed.data.name,
            userId: req.userid,
        },
        select: {
            id: true,
            name: true,
        },
    });
    return res.status(200).json({
        msg: "Category created successfully",
        category,
    });
});

trackerRouter.put("/updateCategory", async (req, res) => {
    const bodyParsed = editCategory.safeParse(req.body);
    if (!bodyParsed.success) {
        return res.status(411).json({
            msg: "Incorrect inputs",
        });
    }

    const expense = await prisma.category.update({
        where: {
            id: req.body.categoryid,
            userId: req.userid,
        },
        data: {
            name: bodyParsed.data.name,
        },
    });
    return res.status(200).json({
        msg: "Category name updated successfully",
    });
});

trackerRouter.delete("/deleteCategory", async (req, res) => {
    const bodyParsed = deleteCategory.safeParse(req.body);
    if (!bodyParsed.success) {
        return res.status(411).json({
            msg: "Category doesnt exist",
        });
    }

    try {
        const category = await prisma.category.findUnique({
            where: {
                userId: req.userid,
                id: bodyParsed.data.categoryId,
            },
            include: {
                _count: true,
            },
        });

        const categoryCount = category?._count.expenses;

        if (categoryCount == 0) {
            await prisma.category.delete({
                where: {
                    userId: req.userid,
                    id: bodyParsed.data.categoryId,
                },
            });
            return res.status(200).json({
                msg: "Deleted successfully",
            });
        } else {
            return res.status(411).json({
                msg: "Category can not be deleted, expenses for this category exists",
            });
        }
    } catch (err) {
        return res.status(411).json({
            msg: "category can not be deleted",
        });
    }
});

trackerRouter.get("/allCategory", async (req, res) => {
    const category = await prisma.category.findMany({
        where: {
            userId: req.userid,
        },
        select: {
            id: true,
            name: true,
        },
    });
    return res.status(200).send(category);
});

trackerRouter.get("/getCategory/:id", async (req, res) => {
    const bodyParsed = getCategory.safeParse(req.body);
    if (!bodyParsed.success) {
        return res.status(411).json({
            msg: "Invalid Inputs",
        });
    }

    const category = await prisma.category.findUnique({
        where: {
            userId: req.userid,
            id: bodyParsed.data.id,
        },
    });
    return res.status(200).send(category);
});

trackerRouter.post("/addExpense", async (req, res) => {
    const bodyParsed = addExpense.safeParse(req.body);
    if (!bodyParsed.success) {
        console.log(bodyParsed.error);

        return res.status(411).json({
            msg: "Incorrect inputs",
        });
    }

    try {
        const category = await prisma.category.findUnique({
            where: {
                userId: req.userid,
                id: bodyParsed.data.categoryId,
            },
            select: {
                name: true,
            },
        });

        if (!category?.name) {
            return res.status(403).json({
                msg: "Invalid inputs",
            });
        }
        const expense = await prisma.expenses.create({
            data: {
                expenseName: bodyParsed.data.name,
                userId: req.userid,
                amount: bodyParsed.data.amount,
                expenseDescription: bodyParsed.data.description,
                categoryId: req.body.categoryId,
                categoryName: category?.name as string,
            },
        });

        return res.status(200).json({
            msg: "Expense added successfully",
            expense,
        });
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid inputs",
        });
    }
});

trackerRouter.put("/updateExpense", async (req, res) => {
    const bodyParsed = editExpense.safeParse(req.body);
    if (!bodyParsed.success) {
        return res.status(411).json({
            msg: "Incorrect inputs",
        });
    }

    const expense = await prisma.expenses.update({
        where: {
            id: req.body.expenseid,
        },
        data: bodyParsed.data,
    });
    return res.status(200).json({
        msg: "Expense updated successfully",
    });
});

trackerRouter.delete("/deleteExpense/:id", async (req, res) => {
    try {
        console.log(req.params.id);

        await prisma.expenses.delete({
            where: {
                userId: req.userid,
                id: req.params.id,
            },
        });

        return res.status(200).json({
            msg: "Deleted successfully",
        });
    } catch (err) {
        return res.status(411).json({
            msg: "Expense not deleted",
            err,
        });
    }
});

trackerRouter.get("/", async (req, res) => {
    try {
        const allExpenses = await prisma.expenses.findMany({
            where: {
                userId: req.userid,
            },
            orderBy: [{ dateUpdated: "desc" }, { dateCreated: "desc" }],
        });

        return res.status(200).json(allExpenses);
    } catch (err) {
        return res.status(403).json({
            msg: "Not authroised ",
        });
    }
});

trackerRouter.get("/getExpense/:id", async (req, res) => {
    const expense = await prisma.expenses.findUnique({
        where: {
            userId: req.userid,
            id: req.params.id,
        },
    });
    return res.status(200).send(expense);
});

trackerRouter.get("/getExpense", async (req, res) => {
    const expense = await prisma.expenses.findMany({
        where: {
            userId: req.userid,
        },
        orderBy: [{ dateUpdated: "desc" }, { dateCreated: "desc" }],
        take: 10,
    });
    return res.status(200).send(expense);
});

trackerRouter.get("/total", async (req, res) => {
    const amount = await prisma.expenses.aggregate({
        where: {
            userId: req.userid,
        },
        _sum: {
            amount: true,
        },
    });
    return res.status(200).send(amount);
});

trackerRouter.get("/getAmount", async (req, res) => {
    const amount = await prisma.expenses.groupBy({
        by: ["categoryId"],
        where: {
            userId: req.userid,
        },
        _sum: {
            amount: true,
        },
    });
    return res.status(200).send(amount);
});

trackerRouter.get("/getAmount/:id", async (req, res) => {
    const bodyParsed = getCategory.safeParse(req.params);
    if (!bodyParsed.success) {
        return res.status(411).json({
            msg: "Expense doesnt exist",
        });
    }

    try {
        const amount = await prisma.expenses.aggregate({
            where: {
                userId: req.userid,
                categoryId: bodyParsed.data.id,
            },
            _sum: {
                amount: true,
            },
        });
        console.log(amount._sum.amount);
        return res.status(200).json({
            amount: amount._sum.amount ?? 0,
        });
    } catch (err) {
        return res.status(411).json(err);
    }
});
export { trackerRouter };
