import mongoose,{Schema} from "mongoose";

const commentSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "users", 
  },
  content: {
    type: String,
    required: true
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: "posts"
  }
}, 
{
  timestamps: true
});

const Comment = mongoose.model('Comment', commentSchema);
export {Comment};
