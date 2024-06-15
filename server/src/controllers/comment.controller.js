import mongoose, { isValidObjectId } from "mongoose";
import { Comment } from "../models/comment.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Post } from "../models/post.model.js";
import { User } from "../models/user.model.js";

const addComment = asyncHandler(async (req, res) => {
  const { postId } = req.body;
  if (!isValidObjectId(postId)) throw new ApiError(400, "Invalid post id");
  const { content } = req.body;
  if (content?.trim() === "") throw new ApiError(404, "content is required");
    const post = await Post.findById(postId);
    const user = await User.findById(req.user?._id);
  if (!user) throw new ApiError(404, "User not found");
  if (!post) throw new ApiError(404, "Post not found");
  const comment = await Comment.create({
    owner: req.user?._id,
    content,
    post: postId,
  });
  if (!comment) throw new ApiError(500, "Comment not created");
  return res.status(200).json(new ApiResponse(200, "Comment added", comment));
});

export { addComment };
