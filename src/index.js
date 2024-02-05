import express from 'express';
import "dotenv/config"
import cors from 'cors'
import mongoose from 'mongoose';
import userRouter from './routes/userRoute';
import postRouter from './routes/postRoute';
import subRouter from './routes/subredditRoute';

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log( `DATABASE MongoDB est connecté`);
}


const app = express()
const port = process.env.PORT 

// j'utilise EJS comme moteur de rendu pour les views (les pages "inscription" "connexion")
app.set("view engine", "ejs");
app.use(express.static("public"));


//routes
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended : false}))
app.get('/', (req, res) => res.render("Home"))

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/subreddit", subRouter);


//serveur
app.listen(port, () => console.log(`[SERVER] is running on http://localhost:${port}`))