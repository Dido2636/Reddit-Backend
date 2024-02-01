import {Router} from 'express'
import {allSubreddit, createSubreddit,updateSubreddit, deleteSubreddit, insertPosttoSubreddit} from '../controller/subredditController'

const subRouter = Router();


subRouter.get('/all', allSubreddit);//OK
subRouter.post("/create-sub", createSubreddit);//OK
subRouter.post("/update-sub", updateSubreddit);
subRouter.post("/:subredditId/add-post/:postId", insertPosttoSubreddit);
subRouter.delete("/delete-sub", deleteSubreddit)

export default subRouter