// Import express, cors, helmet and morgan
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { port } from '@constants/config';
import router from '@routes/index';

// Create Express server
const app = express(); // New express instance

// Express configuration
app.use(bodyParser.json()); // JSON parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors()); // Enable CORS
app.use(helmet()); // Enable Helmet
app.use(morgan('dev')); // Enable Morgan

// Use routes
app.use('/api', router);

// Start Express server
app.listen(port, () => {
  // Callback function when server is successfully started
  console.log(`Server started at http://localhost:${port}`);
});

// Export Express app
export default app;
