import Post from"../models/postModel"
import Subreddit from "../models/subredditModel";
import Comments from "../models/commentModel";

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json({posts, message:"VOICI TOUT LES POSTS"});
  } catch (error) {
    res.json({ error: "OUPSS TU NE VOIS PAS TES POSTS ???" });
  }
};

export const createPost = async (req, res) => {
  const { user, description, image } = req.body;
  try {
    const newPost = await Post.create({
        user,
      description,
      image,
    //   image: req.file ? req.file.path : null, 
    });
    res.json({ newPost, message: "TON POST A ETE CREE" });
  } catch (error) {
    res.json({ error: "AIE PETITE ERREUR LORS DE LA CREATION DE TON POST" });
  }
};

export const showPost = async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });
    res.json({post, message: "VOICI LE POST QUE TU VEUX VOIR"});
  } catch (error) {
    res.json({ error: "AIE TU NE VOIS PAS LE POST ??"});
  }
};

export const updatePost = async (req, res) => {
  try {
    const editpost = await Post.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.json({ editpost, message: "POST UPDATE MA BELLE " });
  } catch (error) {
    res.json({ error: "OUPSS TON UPDATE N'A PAS FONCTIONNÉ" });
  }
};

export const insertCommenttoPost = async (req, res) => {
    try {
      const postID = await Post.findById(req.params.id_post);
      const commentID = await Comments.findById(req.params.id_com);
      postID.comments.push(commentID);
      postID.save();
      res.json({ newPostadd, message: "Ton commentaire a été parfaitement ajouté à ton post" });
    } catch (error) {
      res.json({ error: "Oupsss ton commmentaire n'a pas été ajouté à ton post" });
    }
  };


  

export const deletePost = async (req, res) => {
  try {
    const delPost = await Post.findOneAndDelete({ _id: req.params.id });
    res.json({delPost, message: "POST SUPPRIMÉ BG" });
  } catch (error) {
    res.json({ error: "OUPSS IL Y A UN BUG POUR SUPPRIMER " });
  }
};

