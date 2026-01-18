import express from "express";
import { userRouter } from "./user.js";
import { trackerRouter } from "./tracker.js";

const rootRouter = express.Router();

rootRouter.use("/user", userRouter);
rootRouter.use("/tracker", trackerRouter);

export { rootRouter };
