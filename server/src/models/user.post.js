// import mongoose, { isValidObjectId } from "mongoose";
// import { APIError } from "../utils/ApiError.js";
// import { ApiResponse } from "../utils/ApiResponse.js";
// import { asyncHandler } from "../utils/asyncHandler.js";
// import { User } from "./user.model.js";

// const getPostComments = asyncHandler(async (req, res) => {
//     const { postId } = req.params;
//     const { page = 1, limit = 10 } = req.query;
  
//     if (!isValidObjectId(postId)) {
//       throw new APIError(400, "Invalid Post Id");
//     }
  
//     const post = await Post.findById(postId, { _id: 1 });
//     if (!post) {
//       throw new APIError(404, "Post not found");
//     }
  
//     try {
//       const commentAggregate = Comment.aggregate([
//         {
//           $match: {
//             post: new mongoose.Types.ObjectId(postId),
//           },
//         },
//         {
//           $lookup: {
//             from: "users",
//             localField: "owner",
//             foreignField: "_id",
//             as: "owner",
//             pipeline: [
//               {
//                 $project: {
//                   _id: 1,
//                   username: 1,
//                   avatar: "$avatar.url",
//                 },
//               },
//             ],
//           },
//         },
//         {
//           $addFields: {
//             owner: {
//               $first: "$owner",
//             },
//           },
//         },
//       ]);
  
//       const options = {
//         page: parseInt(page),
//         limit: parseInt(limit),
//         customLabels: {
//           docs: "comments",
//           totalDocs: "totalComments",
//         },
//       };
  
//       const result = await Comment.aggregatePaginate(commentAggregate, options);
  
//       if (result.comments.length === 0) {
//         return res.status(200).json(
//           new ApiResponse(200, [], "No comments found")
//         );
//       }
  
//       return res.status(200).json(
//         new ApiResponse(200, result, "Comments retrieved successfully")
//       );
  
//     } catch (error) {
//       console.error("Error in comment aggregation:", error);
//       throw new APIError(500, "Internal server error in comment aggregation");
//     }
//   });