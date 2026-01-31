import express from "express";
import cors from "cors";
import { rootRouter } from "./routes/index.js";
import globalErrorHandler from "./middleware/error.js";
import dotenv from "dotenv";
const port = process.env.PORT;
dotenv.config();
const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.json());
app.use("/api/v1", rootRouter);
app.use(globalErrorHandler);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=index.js.map