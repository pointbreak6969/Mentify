import { Router } from "express";
import { healthCheck } from "../controllers/healthCheck.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";
const router = Router();
router.route("/healthCheck").get(verifyJwt, healthCheck)
export default router;