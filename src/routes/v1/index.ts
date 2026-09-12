import express from "express";
import submissionRouter from "./submissionRoutes.js";
import { pingCheck } from "../../controllers/pingController.js";

const v1Router = express.Router();

v1Router.use("/submissions", submissionRouter);

v1Router.get("/", (req, res) => {
  res.send("Welcome to API version 1");
});

v1Router.get("/ping", pingCheck);
export default v1Router;
