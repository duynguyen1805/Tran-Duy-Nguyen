"use strict";
import { Todo as TodoModel } from "../models/todo.model";
import { BadRequestError, NotFoundError } from "../core/error.response";
import {
  findListTodos_inRepo,
  findTodoById_inRepo,
  findTodoByTitle_inRepo,
  createTodo_inRepo,
  updateTodoById_inRepo,
  deleteTodoById_inRepo,
} from "../models/repositories/todo.repo";

class TodoService {
  createTodo = async (
    data: Omit<TodoModel, "createdAt" | "updatedAt">
  ): Promise<TodoModel> => {
    const existing_Todo = await findTodoByTitle_inRepo(data.title);
    if (existing_Todo) {
      throw new BadRequestError("Todo already exists");
    }

    return createTodo_inRepo(data);
  };

  getTodos = async (query: object): Promise<TodoModel[]> => {
    return await findListTodos_inRepo(query);
  };

  getTodoById = async (id: string): Promise<TodoModel> => {
    const existing_Todo = await findTodoById_inRepo(id);
    if (!existing_Todo) {
      throw new NotFoundError("Todo not found");
    }
    return existing_Todo;
  };

  updateTodoById = async (
    id: string,
    data: Partial<TodoModel>
  ): Promise<TodoModel | null> => {
    const existing_Todo = await findTodoById_inRepo(id);
    if (!existing_Todo) {
      throw new NotFoundError("Todo not found");
    }

    return await updateTodoById_inRepo(existing_Todo._id as string, data);
  };

  deleteTodoById = async (id: string): Promise<boolean | any> => {
    const existing_Todo = await findTodoById_inRepo(id);
    if (!existing_Todo) {
      throw new NotFoundError("Todo not found");
    }
    const result = await deleteTodoById_inRepo(existing_Todo._id as string);

    if (result === 0) {
      throw new NotFoundError(
        `Something wrong - To do not found or already deleted.`
      );
    }
    return result;
  };
}

export default TodoService;
