// configure dotenv for storing app secret
import * as dotenv from "dotenv";
dotenv.config();
// express app
import express from "express";
// logging
import morgan from "morgan";

import jobRouter from "./routes/JobRouter.js";
const port = process.env.PORT || 4000;
const app = express();

// logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// json middleware
app.use(express.json());

app.use("/api/v1/jobs", jobRouter);

app.use("*", (req, res) => {
  res.status(404).send({ message: "Not fond" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: "Something went wrong" });
});

app.listen(port, () => {
  console.log("server is running");
});
