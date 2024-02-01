import User from "../models/userModel";
import "dotenv/config";

export const inscription = async (req, res) => {
  const {name, email, password} = req.body;
  try {
    let newUser = await User.create({name, email, password});
    console.log(newUser);
    res.json({ message: "Yesss tu es bien inscrit", newUser });
  } catch (error) {
    res
      .status(500)
      .json({
        error: "Oupss une erreur c'est produite lors de ton inscription",
      });
  }
};

export const connexion = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        console.log(user);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export const getAllUser = async (req, res) => {
    try {
      const user = await User.find();
      res.json(user);
    } catch (error) {
      res.json({ error: "Oupss tu n'a pas reussi a voir tout les Utilisateurs"});
    }
  };
  