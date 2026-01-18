import express from "express";
import cors from "cors";
import { rootRouter } from "./routes/index.js";
import globalErrorHandler from "./middleware/error.js";
const port = process.env.PORT;

const app = express();

// app.use(cors);
app.use(express.json());
app.use("/api/v1", rootRouter);
app.use(globalErrorHandler);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
