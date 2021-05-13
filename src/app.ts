import express, { Request, Response } from 'express';
import cors from 'cors';
import httpLogger from 'tw-express-http-logger';
import cookieParser from 'cookie-parser';
import apiRoutes from './routes';

//Create express application
export const app: express.Application = express();

// remove x-powered-by: express
app.disable('x-powered-by');

//middleware
app.use(cors());
app.use(httpLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// server API routes
app.use('/api', apiRoutes);
