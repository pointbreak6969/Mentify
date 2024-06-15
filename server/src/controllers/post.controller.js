import { Post } from "../models/post.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import mongoose, { isValidObjectId } from "mongoose";

const uploadPost = asyncHandler(async (req, res) => {
  try {
    const { content } = req.body;
    if (!content || !content.trim())
      throw new ApiError(404, "Please provide content for the post");

    let mediaLocalPath = req.file?.path
    console.log(mediaLocalPath)
    let mediaFile = await uploadOnCloudinary(mediaLocalPath);

    let image = {};
    if (mediaFile) {
      image = {
        publicId: mediaFile.public_id,
        url: mediaFile.url,
      };
    }

    const post = await Post.create({
      owner: req.user?._id,
      content,
      image,
    });

    if (!post) {
      throw new ApiError(500, "Post not created");
    }

    return res.status(200).json(new ApiResponse(200, "Post uploaded", post));
  } catch (error) {
    console.log("There was error while uploading the post", error);
    throw new ApiError(500, "Internal server error");
  }
});

export { uploadPost };
