import dotenv from "dotenv";
dotenv.config();

import express, { urlencoded } from "express";

const app = express();

import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

const PORT = process.env.PORT || 8001;

//connecting DB
import mongoClient from "./src/config/db.js";
mongoClient();

//middlewares
app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

//load router
import adminRouter from "./src/routers/admin.router.js";
//user router
app.use("/api/v1/admin-user", adminRouter);

app.use("/", (req, res, next) => {
  res.send("ok");
});

//global error handler
app.use((error, req, res, next) => {
  console.log(error);
  res.status(error.status || 500);
  res.json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  console.log(`Server is ready at http://localhost:${PORT}`);
});
