import mongoose from "mongoose";

const Schema = mongoose.Schema;

const articleSchema = new Schema(
    {
    title: { type: String, required: true }, 
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref:"User", required: true },
    publicationDate: { type: Date, default: Date.now },
    category: { type: String, required: true }
  }
  );
  
  export const Article = mongoose.model('Article', articleSchema);
  
 