import express from "express";
import { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import "./db/init.mongodb";

import { ErrorResponse } from "./core/error.response";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// INIT MIDDLEWARE
app.use(morgan("combined"));
app.use(helmet());
app.use(compression());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// INIT ROUTES
import routes from "./routes/index";
app.use(routes);

// HANDLING ERROR
app.use((req, res, next) => {
  const error: ErrorResponse = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use(
  (error: ErrorResponse, req: Request, res: Response, next: NextFunction) => {
    const statusCode = error?.status || 500;

    return res.status(statusCode).json({
      status: "error",
      code: statusCode,
      stack: error.stack,
      message: error.message,
    });
  }
);

export default app;
