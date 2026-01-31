import z from "zod";
const addCategory = z.object({
    name: z.string(),
});
const getCategory = z.object({
    id: z.string(),
});
const getExpense = z.object({
    id: z.string(),
});
const editCategory = z.object({
    categoryid: z.string(),
    name: z.string().optional(),
});
const deleteCategory = z.object({
    categoryId: z.string(),
});
const addExpense = z.object({
    name: z.string(),
    amount: z.number().nonnegative(),
    description: z.string().optional(),
    categoryId: z.string(),
});
const editExpense = z.object({
    name: z.string().optional(),
    amount: z.number().nonnegative().optional(),
    description: z.string().optional(),
    categoryId: z.string().optional(),
    expenseId: z.string(),
});
const deleteExpense = z.object({
    expenseId: z.string(),
});
export { addCategory, editCategory, addExpense, editExpense, deleteCategory, deleteExpense, getCategory, getExpense, };
//# sourceMappingURL=trackerSchema.js.map