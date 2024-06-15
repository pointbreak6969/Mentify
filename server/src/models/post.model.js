import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      publicId: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("post", postSchema);
export { Post };
