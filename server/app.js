import express from "express";
import cors from "cors";
import authRoute from "./routes/authRoute.js";
import { dbConnect } from "./utils/dbConnect.js";
import userRoute from "./routes/usersRoute.js";
import { globleErrorHandler } from "./middlewares/globleErrorHandler.js";
import cookieParser from "cookie-parser";
import articleRoute from "./routes/articleRoute.js";

const app = express();

// DB Connection
dbConnect(app);
// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/article", articleRoute);

// Error handler middleware
app.use(globleErrorHandler);

// Page Not found Error(404) handler middleware
app.use("*", (req, res) => {
  res.status(404).json({
    message: `${req.originalUrl} -> Route Not Found`,
  });
});
