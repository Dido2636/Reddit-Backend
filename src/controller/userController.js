import User from "../models/userModel";
import "dotenv/config";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const inscription = async (req, res) => {
  const {name, email, password} = req.body;
  try {
    let newUser = await User.create({name, email, password});
    console.log(newUser);
    res.json({ message: "Yesss tu es bien inscrit", newUser });
  } catch (error) {
    res
      .status(500)
      .json(error.message);
  }
};

export const connexion = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email})
        if (user && (await bcrypt.compare(password, user.password))) {
          const token = jwt.sign({email:user.email},process.env.JWT_SECRET,)
          res.json({token});
        }else {
          res.status(401).json({error:"Vos identifiants ne sont pas correct"})
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export const getAllUser = async (req, res) => {
    try {
      const user = await User.find();
      res.json(user);
    } catch (error) {
      res.json(error.message);
    }
  };
  