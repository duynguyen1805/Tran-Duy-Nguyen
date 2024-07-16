import Todo, { Todo as TodoModel } from "../todo.model";

const createTodo_inRepo = async (
  data: Omit<TodoModel, "createdAt" | "updatedAt">
): Promise<TodoModel> => {
  return await Todo.create(data);
};

const findListTodos_inRepo = async (query: object): Promise<TodoModel[]> => {
  return await Todo.find(query).lean();
};

const findTodoById_inRepo = async (id: string): Promise<TodoModel | null> => {
  return await Todo.findById(id).lean();
};

const findTodoByTitle_inRepo = async (
  title: string
): Promise<TodoModel | null> => {
  return await Todo.findOne({ title }).lean();
};

const updateTodoById_inRepo = async (
  id: string,
  data: Partial<TodoModel>
): Promise<TodoModel | null> => {
  return await Todo.findByIdAndUpdate(id, data, { new: true }).lean();
};

const deleteTodoById_inRepo = async (id: string): Promise<boolean | any> => {
  const result = await Todo.deleteOne({ _id: id }).lean();
  return result.deletedCount;
};

export {
  createTodo_inRepo,
  findListTodos_inRepo,
  findTodoById_inRepo,
  findTodoByTitle_inRepo,
  updateTodoById_inRepo,
  deleteTodoById_inRepo,
};
