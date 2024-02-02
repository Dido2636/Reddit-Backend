import { Schema, mongoose } from "mongoose";

const commentSchema = new Schema({
user: { type: Schema.Types.ObjectId, ref: "User" },
comment: String,
post:[{ type: Schema.Types.ObjectId, ref: "Post"}] ,
});

const Comments = mongoose.model("Comments", commentSchema);

export default Comments;