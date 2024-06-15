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


app.get("/", (req, res) => {
    res.send("Hello World")
})

//import routes
import userRouter from "./routes/user.routes.js"
import postRouter from "./routes/post.routes.js"
import commentRouter from "./routes/comment.routes.js"
app.use("/api/v1/user", userRouter);   
app.use("/api/v1/post", postRouter);
app.use("/api/v1/comment", commentRouter)
export {app};