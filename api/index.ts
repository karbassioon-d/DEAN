import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './src/router';
import bodyParser from 'body-parser';


dotenv.config();

const app: Express = express();

app.use(bodyParser.json());

const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server 69420');
});

mongoose.Promise = Promise;
mongoose.connect(`${process.env.MONGO_URL}`);
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use('/', router());

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
