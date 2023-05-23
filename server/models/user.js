import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    blogs : [{types: mongoose.Types.ObjectId}]
  }
  );
  
  export const User = mongoose.model('User', userSchema);
  
 