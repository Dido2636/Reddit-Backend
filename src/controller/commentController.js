import Comments from "../models/commentModel";
import Post from "../models/postModel";
import Subreddit from "../models/subredditModel";

export const createcommentinPost = async (req, res, next) => {
    const { user, content} = req.body
    try {
  
      } catch (error) {
        res.json(error.message);
      }
    };


    export const createcommentinSubreddit = async (req, res, next) => {
        const { user, content} = req.body
        try {
      
          } catch (error) {
            res.json(error.message);
          }
        };



    