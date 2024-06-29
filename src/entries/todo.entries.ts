export type TypeTodoStatus = 'pending' | 'completed' | 'cancelled';

export interface ITodo {
  id: string;
  title: string;
  status: TypeTodoStatus;
  content: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export type TypeTodos = ITodo[];
