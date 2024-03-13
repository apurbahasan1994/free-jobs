import "express-async-errors";
// configure dotenv for storing app secret
import * as dotenv from "dotenv";
dotenv.config();
// express app
import express from "express";
// logging
import morgan from "morgan";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import jobRouter from "./routes/JobRouter.js";
import authRouter from "./routes/AuthRouter.js";
import userRouter from "./routes/UserRouter.js";
import errorHandlerMiddleWare from "./Middlewares/ErrorHandler.js";
import { authMiddleware } from "./Middlewares/AuthMiddleware.js";
const port = process.env.PORT || 4000;
const app = express();

// logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// cookie parsing
express.use(cookieParser());

// json middleware
app.use(express.json());

//rotes
app.use("/api/v1/jobs", jobRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", authMiddleware, userRouter);

app.use("*", (req, res) => {
  res.status(404).send({ message: "Not fond" });
});

app.use(errorHandlerMiddleWare);

try {
  await mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  app.listen(port, () => {
    console.log("server is running");
  });
} catch (e) {
  console.log(e.message);
  process.exit(1);
}
