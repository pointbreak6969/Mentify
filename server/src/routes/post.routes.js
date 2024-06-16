import {uploadPost, getAllPost} from "../controllers/post.controller.js"
import { Router } from "express"
import {upload} from "../middlewares/multer.middleware.js"
import {verifyJwt} from "../middlewares/auth.middleware.js"
const router = Router();

router.route("/uploadPost").post(verifyJwt, upload.single("media"), uploadPost);
router.route("/getAllPost").get(verifyJwt, getAllPost);
export default router;