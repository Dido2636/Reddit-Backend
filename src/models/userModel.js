import {Schema, mongoose} from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
    name : String,
    email: { type : String,},
    password: String,
    comment: [{ type: Schema.Types.ObjectId, ref: "Comments" }],
    subreddit: { type: Schema.Types.ObjectId, ref: "Subreddit" }
})

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    try {
      const hashedPassword = await bcrypt.hash(this.password, 10);
      this.password = hashedPassword;
      next();
    } catch (error) {
      next(error);
    }
  });

// userSchema.methods.encryptPassword = async (password) => {
//     const salt = await bcrypt.genSalt(5);
//     const hash = await bcrypt.hash(password, salt);
//     return hash;
//   };

// userSchema.methods.validPassword = async (candidatePassword, oldPassword) => {
//     const result = await bcrypt.compare(candidatePassword, oldPassword)
//     return result
//     }



const User = mongoose.model("User",userSchema);

export default User;
