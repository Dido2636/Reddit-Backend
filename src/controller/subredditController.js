import Subreddit from "../models/subredditModel"
import Post from "../models/postModel"

export const allSubreddit = async (req, res) => {
  try {
    const subreddit = await Subreddit.find();
    res.json({subreddit, message:"Voici tout les subreddits"});
  } catch (error) {
    res.json({ error: "OUPSS TU NE VOIS PAS TES POSTS ???" });
  }
};

export const createSubreddit = async (req, res, next) => {
  const { title, description} = req.body
  try {
    const subreddit = await Subreddit.create({title, description});
    res.json({ subreddit, message: "Votre subreddit à bien été crée" });
  } catch (error) {
    res.json({ error: "Oups une erreur lors de la creation de votre subreddit !!!!!" });
  }
};

export const updateSubreddit = async (req, res, next) => {
  try {
    const subreddit = await Subreddit.findOneAndUpdate(
      { _id: req.params.id_sub },
      req.body,
      { new: true }
    );
    res.json({ subreddit, message: "Votre subreddit à été parfaitement update !!!!" });
  } catch (error) {
    res.json({ error: "Oupsss une erreur lors de l'update de votre subreddit" });
  }
};

export const insertPosttoSubreddit = async (req, res) => {
  try {
    const newPostadd = await Post.findById(req.params.id_post);
    const subredditID = await Subreddit.findById(req.params.id_subreddit);
    subredditID.posts.push(newPostadd);
    subredditID.save();
    res.json({ newPostadd, message: "Ton post a été parfaitement ajouté à ton subreddit" });
  } catch (error) {
    res.json({ error: "Oupsss ton post n'a pas été ajouté à ton subreddit" });
  }
};


 export const deleteSubreddit = async (req, res, next) => {
  try {
    const subreddit = await Subreddit.findOneAndDelete({
      _id: req.params.id_sub,
    });
    res.json({ subreddit, message: "Votre subreddit à été parfaitement delete" });
  } catch (error) {
    res.json({ error: "Oupss une erreur lors de suppression de votre subreddit !!!!!" });
  }
};


export const deletePostinSubreddit = async (req, res) => {
  try {
    const deletePost = await Post.findById(req.params.id_post);
    const subredditID = await Subreddit.findById(req.params.id_sub);
    subredditID.post.pull(deletePost);
    await subredditID.save();
    res.json({ deletePost, message: "Le post a été parfaitement supprimé du subreddit" });
  } catch (error) {
    res.json({ error:"Oupss une erreur lors de la supression du Post du subreddit" });
  }
};


