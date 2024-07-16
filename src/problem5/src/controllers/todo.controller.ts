"use strict";
import { Request, Response } from "express";
import Todo, { Todo as TodoModel } from "../models/todo.model";
import TodoService from "../services/todo.service";
import { OK, Created, NoContent } from "../core/success.response";

const todoService = new TodoService();
class TodoController {
  create = async (req: Request, res: Response): Promise<void> => {
    const todoData: Omit<TodoModel, "createdAt" | "updatedAt"> = req.body;

    new Created({
      message: "Todo created successfully",
      metadata: await todoService.createTodo(todoData),
    }).send(res);
  };

  getlist = async (req: Request, res: Response): Promise<void> => {
    new OK({
      message: "Get Todo list successfully",
      metadata: await todoService.getTodos(),
    }).send(res);
  };

  getById = async (req: Request, res: Response): Promise<void> => {
    const todoId: string = req.params.id;

    new OK({
      message: "Get Todo by id successfully",
      metadata: await todoService.getTodoById(todoId),
    }).send(res);
  };

  updateById = async (req: Request, res: Response): Promise<void> => {
    const todoId: string = req.params.id;
    const todoData: Partial<TodoModel> = req.body;

    new OK({
      message: "Todo updated successfully",
      metadata: await todoService.updateTodoById(todoId, todoData),
    }).send(res);
  };

  deleteById = async (req: Request, res: Response): Promise<void> => {
    const todoId: string = req.params.id;

    new OK({
      message: "Todo deleted successfully",
      metadata: await todoService.deleteTodoById(todoId),
    }).send(res);
  };
}

export default new TodoController();
