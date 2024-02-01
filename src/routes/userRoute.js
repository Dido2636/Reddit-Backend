import {Router} from "express";
import { inscription, connexion, getAllUser } from "../controller/userController";
const userRouter = Router()

userRouter.get("/inscription", (req, res) => res.render("Inscription"))
userRouter.get("/connexion", (req, res) => res.render("Connexion"))


userRouter.get('/', getAllUser);//OK
userRouter.post("/inscription", inscription);//OK
userRouter.post("/connexion", connexion);


export default userRouter