import express from 'express';
import {userRouter} from "./app/userRouter.js";
import {authRouter} from "./app/authRouter.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', userRouter);
app.use('/api', authRouter);


const startApp = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}
startApp()