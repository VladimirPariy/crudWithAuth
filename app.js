import express from 'express';
import {usersRouter} from "./app/users/usersRouter.js";
import {authRouter} from "./app/auth/authRouter.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', usersRouter);
app.use('/api', authRouter);


const startApp = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}
startApp()