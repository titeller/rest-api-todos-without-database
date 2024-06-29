import type { Request, Response } from "express";
import * as todoServices from "@services/todo.services";

export const getAllTodoController = (req: Request, res: Response) => {
  const result = todoServices.getAllTodoService();
  res.send(result);
};

export const getTodoByIdController = (req: Request, res: Response) => {
  const { id } = req.params;
  const result = todoServices.getTodoByIdService(id);
  res.send(result);
};

export const createTodoController = (req: Request, res: Response) => {
  const { title, content, tags } = req.body;
  const result = todoServices.createTodoService(title, content, tags);
  res.send(result);
};

export const updateTodoController = (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content, tags } = req.body;
  const result = todoServices.updateTodoService(id, title, content, tags);
  res.send(result);
};

export const removeTodoController = (req: Request, res: Response) => {
  const { id } = req.params;
  const result = todoServices.removeTodoService(id);
  res.send(result);
};
