import z from "zod";
declare const addCategory: z.ZodObject<{
    name: z.ZodString;
}, z.z.core.$strip>;
declare const getCategory: z.ZodObject<{
    id: z.ZodString;
}, z.z.core.$strip>;
declare const getExpense: z.ZodObject<{
    id: z.ZodString;
}, z.z.core.$strip>;
declare const editCategory: z.ZodObject<{
    categoryid: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>;
declare const deleteCategory: z.ZodObject<{
    categoryId: z.ZodString;
}, z.z.core.$strip>;
declare const addExpense: z.ZodObject<{
    name: z.ZodString;
    amount: z.ZodNumber;
    description: z.ZodOptional<z.ZodString>;
    categoryId: z.ZodString;
}, z.z.core.$strip>;
declare const editExpense: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    amount: z.ZodOptional<z.ZodNumber>;
    description: z.ZodOptional<z.ZodString>;
    categoryId: z.ZodOptional<z.ZodString>;
    expenseId: z.ZodString;
}, z.z.core.$strip>;
declare const deleteExpense: z.ZodObject<{
    expenseId: z.ZodString;
}, z.z.core.$strip>;
export { addCategory, editCategory, addExpense, editExpense, deleteCategory, deleteExpense, getCategory, getExpense, };
//# sourceMappingURL=trackerSchema.d.ts.map