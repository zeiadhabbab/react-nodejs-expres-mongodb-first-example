import express from "express"
import mongoose from "mongoose";
import studentsRouter from "./routers/students";
import cors from "cors";

const app = express();
const port = 3000

app.use(cors({
    origin: "http://localhost:5173"
}))

app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/students')
  .then(() => console.log('DB Connected!'));

app.use('/students', studentsRouter)

app.listen(port, ()=>{
    console.log(`Running on port ${port}`);
})