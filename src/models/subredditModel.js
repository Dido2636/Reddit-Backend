import { Schema, mongoose } from "mongoose";

const subredditSchema = new Schema({
user: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
title: String,
description: String,
posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
// comment: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
createAT: { type: Date, default: Date.now() },
});

const Subreddit = mongoose.model("Subreddit", subredditSchema);

export default Subreddit;