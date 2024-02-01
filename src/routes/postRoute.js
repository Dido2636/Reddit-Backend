import {Router} from "express"
import {
    getAllPosts,
    createPost,
    showPost,
    updatePost,
    deletePost,
  } from "../controller/postController"
  
  
  const postRouter = Router();
  
  postRouter.get("/all", getAllPosts);//OK
  postRouter.post("/create", createPost);//OK
  postRouter.get("/:id", showPost);//OK
  postRouter.put("/edit/:id", updatePost);//OK
  postRouter.delete("/delete/:id", deletePost);//OK
  
  export default postRouter