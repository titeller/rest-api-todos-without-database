export interface ITodo {
    id: string;
    title: string
    content: string
    tags: string[];
    createdAt: string;
    updatedAt: string;
};

export type TypeTodos = ITodo[];
