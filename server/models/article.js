import mongoose from "mongoose";

const Schema = mongoose.Schema;

const articleSchema = new Schema(
    {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    publicationDate: { type: Date, default: Date.now }
  }
  );
  
  export const Article = mongoose.model('Article', articleSchema);
  
 