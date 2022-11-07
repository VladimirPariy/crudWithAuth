import express from 'express';
import {usersRouter} from "./app/users/usersRouter.js";
import {authRouter} from "./app/auth/authRouter.js";
import {logger} from './app/logging.js';
import {setupDB} from "./DB/setupDB.js";


const PORT = process.env.PORT || 3000;
const HOST = 'localhost'


const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', usersRouter);
app.use('/api', authRouter);


const startApp = async () => {
  try {
    app.listen(PORT);
    setupDB();
    logger.info(`Server started and running on http://${HOST}:${PORT}`)
  } catch (e) {
    logger.error(e.message)
  }
}
startApp()