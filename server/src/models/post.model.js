import mongoose,{Schema} from "mongoose";

const postSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
  content: {
    type: String,
    required: true
  },
  image: {
    publicId: {
      type: String,
     },
    url: {
      type: String,
    },
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

const Comment = mongoose.model('Comment', postSchema);

module.exports = Comment;
