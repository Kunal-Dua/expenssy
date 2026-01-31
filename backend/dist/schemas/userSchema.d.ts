import z from "zod";
declare const userSignUp: z.ZodObject<{
    email: z.ZodEmail;
    firstName: z.ZodString;
    lastName: z.ZodOptional<z.ZodString>;
    password: z.ZodString;
}, z.z.core.$strip>;
declare const userSignIn: z.ZodObject<{
    email: z.ZodEmail;
    password: z.ZodString;
}, z.z.core.$strip>;
declare const userUpdate: z.ZodObject<{
    firstName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>;
export { userSignUp, userSignIn, userUpdate };
//# sourceMappingURL=userSchema.d.ts.map