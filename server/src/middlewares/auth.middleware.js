import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.js";

const verifyJwt = asyncHandler( async (req, res, next)=>{
try {
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
    if (!token){
        throw new ApiError(401, "Unauthorized request")
    }
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN);
    const user = await User.findById(decodedToken?._id).select("-password -refreshToken -otp");
    if (!user){
        throw new ApiError(404, "User not found")
    }
    req.user = user;
    next();
} catch (error) {
    throw new ApiError(401, error.message || "Unauthorized request")
}
})
export {verifyJwt}