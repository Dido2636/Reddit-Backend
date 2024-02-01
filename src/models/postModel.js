import { Schema, mongoose } from "mongoose";

const postSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  description: String,
  image: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  createAT: { type: Date, default: Date.now() },
});

const Post = mongoose.model("Post", postSchema);

export default Post;