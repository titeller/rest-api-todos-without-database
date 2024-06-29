import { Router } from 'express';
import * as todoController from '@controllers/todo.controllers';

// New Router instance
const todoRouter = Router();

todoRouter.get('/', todoController.getAllTodoController);
todoRouter.post('/', todoController.createTodoController);
todoRouter.get('/:id', todoController.getTodoByIdController);
todoRouter.put('/:id', todoController.updateTodoController);
todoRouter.put('/:id/status', todoController.updateTodoStatusController);
todoRouter.delete('/:id', todoController.removeTodoController);

export default todoRouter;
