import { addComment } from "../controllers/comment.controller.js";
import {verifyJwt} from "../middlewares/auth.middleware.js"
import {Router} from "express";

const router = Router();
router.route("/addComment").post(verifyJwt, addComment);

export default router;