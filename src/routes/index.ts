import { Router } from 'express';
import todoRouter from '@routes/todo.routes';

// Create a new Router instance
const router = Router();

// Mount the routers
router.use('/todo', todoRouter);

export default router;