import express from "express";
import cors from "cors";
import { rootRouter } from "./routes/index.js";
import globalErrorHandler from "./middleware/error.js";
import dotenv from "dotenv";
const port = process.env.PORT;

dotenv.config();

const app = express();
const allowedOrigins = [
    "http://localhost:5173",
    "https://expenssy-frontend.vercel.app",
    "https://expenssy-frontend-511gge0tx-kunal-duas-projects.vercel.app",
];
app.use(
    cors({
        origin: allowedOrigins,
        credentials: true,
    }),
);
app.use(
    cors({
        exposedHeaders: ["Authorization"],
    }),
);

app.use(express.json());
app.get("/ping", (req, res) => {
    res.json({ ok: true });
});
app.use("/api/v1", rootRouter);
app.use(globalErrorHandler);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
