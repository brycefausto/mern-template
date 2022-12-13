import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// import UserRoute from "./routes/UserRoute.js";
import EmployeeRoute from "./routes/EmployeeRoute.js";
 
const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/mern_exercise',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.set('strictQuery', true);
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));
 
app.use(cors());
app.use(express.json());
// app.use(UserRoute);
app.use(EmployeeRoute);
 
app.listen(5000, ()=> console.log('Server up and running...'));