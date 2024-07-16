import { Router } from "express";
import TodoController from "../../../controllers/todo.controller";
import { asyncHandler } from "../../../helpers/asyncHandler";

const router = Router();

router.post("/create", asyncHandler(TodoController.create));
router.get("/get-list", asyncHandler(TodoController.getlist));
router.get("/get-by-id/:id", asyncHandler(TodoController.getById));
router.put("/update/:id", asyncHandler(TodoController.updateById));
router.delete("/delete/:id", asyncHandler(TodoController.deleteById));

export default router;
