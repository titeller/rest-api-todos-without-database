import todosJSON from '@data/todos.json';
import { ITodo, TypeTodos, TypeTodoStatus } from '@entries/todo.entries';
import { getDate, getNewId, writeJSONFile } from '@utils/todos.utils';

export class Todo {
  todos: TypeTodos = [];
  constructor(todos?: TypeTodos) {
    this.todos = todos ? todos : (todosJSON as TypeTodos);
  }

  private getTodoIndexById(id: string): number {
    return this.todos.findIndex((todos) => todos.id == id);
  }

  private commitToJSON(): void {
    writeJSONFile('dist/data/todos.json', this.todos);
  }

  getAllTodos() {
    return {
      count: this.todos.length,
      data: {
        todos: this.todos,
      },
    };
  }

  getTodoById(id: string): ITodo | undefined {
    const todo = this.todos.find((todo: ITodo) => todo.id === id);
    return todo;
  }

  createTodo(
    title: string,
    content: string,
    tags: string[]
  ): ITodo | undefined {
    const id = getNewId();
    const transactionDate = getDate();
    const status = 'pending';
    this.todos.push({
      id,
      title,
      content,
      status,
      tags,
      createdAt: transactionDate,
      updatedAt: transactionDate,
    });
    this.commitToJSON();
    const todoCreated = this.getTodoById(id);
    return todoCreated;
  }

  updateTodoStatus(id: string, status: TypeTodoStatus): ITodo | undefined {
    const todoIndex = this.getTodoIndexById(id);
    if (todoIndex === -1) return;

    const transactionDate = getDate();
    this.todos[todoIndex] = {
      ...this.todos[todoIndex],
      status,
      updatedAt: transactionDate,
    };
    this.commitToJSON();
    const todoUpdated = this.getTodoById(id);
    return todoUpdated;
  }

  updateTodo(
    id: string,
    title: string,
    content: string,
    tags: string[]
  ): ITodo | undefined {
    const todoIndex = this.getTodoIndexById(id);
    if (todoIndex === -1) return;

    const transactionDate = getDate();
    this.todos[todoIndex] = {
      ...this.todos[todoIndex],
      title,
      content,
      tags,
      updatedAt: transactionDate,
    };
    this.commitToJSON();
    const todoUpdated = this.getTodoById(id);
    return todoUpdated;
  }

  removeTodo(id: string): void {
    const todoIndex = this.getTodoIndexById(id);
    if (todoIndex === -1) return;

    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.commitToJSON();
  }
}
