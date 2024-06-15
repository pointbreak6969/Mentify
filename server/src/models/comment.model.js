import mongoose,{Schema} from "mongoose";

const commentSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User', 
  },
  content: {
    type: String,
    required: true
  },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
