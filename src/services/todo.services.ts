import { TypeTodoStatus } from '@entries/todo.entries';
import { Todo } from '@libs/todo.libs';

const todoService = new Todo();

export const getAllTodoService = () => {
  const result = todoService.getAllTodos();
  return result;
};

export const getTodoByIdService = (id: string) => {
  const result = todoService.getTodoById(id);
  return result;
};

export const createTodoService = (
  title: string,
  content: string,
  tags: string[]
) => {
  const result = todoService.createTodo(title, content, tags);
  return result;
};

export const updateTodoService = (
  id: string,
  title: string,
  content: string,
  tags: string[]
) => {
  const result = todoService.updateTodo(id, title, content, tags);
  return result;
};

export const updateTodoStatusService = (id: string, status: TypeTodoStatus) => {
  const result = todoService.updateTodoStatus(id, status);
  return result;
};

export const removeTodoService = (id: string) => {
  const result = todoService.removeTodo(id);
  return result;
};
