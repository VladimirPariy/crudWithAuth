import express from 'express';
import {usersRouter} from "./app/users/users.router";
import {authRouter} from "./app/auth/auth.router";
import {logger} from './app/logging';
import {setupDB} from "./DB/setupDB";


const PORT = process.env.PORT || 3000;
const HOST = 'localhost'


const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', usersRouter);
app.use('/api', authRouter);


(async () => {
	try {
		app.listen(PORT);
		setupDB();
		logger.info(`Server started and running on http://${HOST}:${PORT}`)
	} catch (e) {
		if (e instanceof Error) logger.error(e.message)
	}
})()
