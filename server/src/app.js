import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors";   
const app = express();
app.use(cors({
    origin: "*",
    credentials: true
}))
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser())

//import routes
import userRouter from "./routes/user.routes.js"

app.use("/api/v1/user", userRouter);   

export {app};