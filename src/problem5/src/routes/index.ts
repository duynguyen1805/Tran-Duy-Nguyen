import express, { Router } from "express";
const router = Router();

router.use("/v1/api/todo", require("./v1/todos/index").default);

export default router;
