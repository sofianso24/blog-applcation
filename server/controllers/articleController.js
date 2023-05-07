
import { User } from "../models/user.js"
import { Article } from "../models/article.js"


// post aticle

export const postArticle = async (req, res) => {
    try {
        // Create a new article instance

        const article = new Article({
          title: req.body.title,
          content: req.body.content,
          author: req.user._id
        });
    
        // Save the article to the database

        await article.save();
    
        res.send(article);
      } catch (error) {
        res.status(500).send({ error: "Unable to create article" });
      }
   
}

// edit article 

export const editArticle = async (req, res) => {
    try {
        // Find the article by ID and the current user as the author

        const article = await Article.findOne({
          _id: req.params.id,
          author: req.user._id
        });
    
        if (!article) {
          return res.status(404).send({ error: "Article not found" });
        }
    
        // Update the article with the new data

        article.title = req.body.title || article.title;
        article.content = req.body.content || article.content;
    
        // Save the updated article to the database

        await article.save();
    
        res.send(article);
      } catch (error) {
        res.status(500).send({ error: "Unable to edit article" });
      }
}

// delete anarticle 

export const deleteArticle = async (req, res) => {
    try {
        // Find the article by ID and the current user as the author

        const article = await Article.findOneAndDelete({
          _id: req.params.id,
          author: req.user._id
        });
    
        if (!article) {
          return res.status(404).send({ error: "Article not found" });
        }
    
        res.send({ message: "Article deleted" });
      } catch (error) {
        res.status(500).send({ error: "Unable to delete article" });
      }
}


// get all articles 

export const getArticles = async (req, res) => {
    try {
        // Find all articles and populate the author field with the user data

        const articles = await Article.find().populate("author");
    
        res.send(articles);
      } catch (error) {
        res.status(500).send({ error: "Unable to retrieve articles" });
      }
}

// get a specific article

export const getAnArticle = async (req, res) => {
    try {
        // Find the article by ID and populate the author field with the user data

        const article = await Article.findById(req.params.id).populate("author");
    
        if (!article) {
          return res.status(404).send({ error: "Article not found" });
        }
    
        res.send(article);
      } catch (error) {
        res.status(500).send({ error: "Unable to retrieve article" });
      }
}

// systheme de filtrage :

export const searchArticles = async (req, res) => {
    try {
      const { title, author, category } = req.query;
  
      let filters = {};
      if (title) {
        filters.title = { $regex: title, $options: 'i' };
      }
      if (author) {
        filters.author = { $regex: author, $options: 'i' };
      }
      if (category) {
        const categoryId = await Article.findOne({ title: category });
        if (categoryId) {
          filters.category = categoryId._id;
        } else {
          return res.status(400).json({ message: 'Category not found' });
        }
      }
   
      const articles = await Article.find(filters).populate('category', 'title');
  
      res.status(200).json(articles);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Something went wrong' });
    }
  };