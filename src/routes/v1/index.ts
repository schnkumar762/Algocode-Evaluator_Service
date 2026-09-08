import express from "express";

const v1Router = express.Router();

v1Router.get("/", (req, res) => {
  res.send("Welcome to API version 1");
});

export default v1Router;
