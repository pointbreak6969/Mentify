import { addComment, getAllPostComments } from "../controllers/comment.controller.js";
import {verifyJwt} from "../middlewares/auth.middleware.js"
import {Router} from "express";

const router = Router();
router.route("/addComment").post(verifyJwt, addComment);
router.route("/getAllPostComments").get(verifyJwt, getAllPostComments);

export default router;