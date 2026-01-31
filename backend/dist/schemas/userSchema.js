import z from "zod";
const userSignUp = z.object({
    email: z.email(),
    firstName: z.string(),
    lastName: z.string().optional(),
    password: z.string().min(10),
});
const userSignIn = z.object({
    email: z.email(),
    password: z.string().min(6),
});
const userUpdate = z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    password: z.string().min(6).optional(),
});
export { userSignUp, userSignIn, userUpdate };
//# sourceMappingURL=userSchema.js.map