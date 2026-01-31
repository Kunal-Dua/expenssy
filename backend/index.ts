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
        origin: (origin, callback) => {
            // allow server-to-server & Postman
            if (!origin) return callback(null, true);

            if (allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
    }),
);
app.options("*", cors());
app.use(express.json());
app.use("/api/v1", rootRouter);
app.use(globalErrorHandler);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
