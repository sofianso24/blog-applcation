import  Express  from "express";

import { postArticle,editArticle,deleteArticle,
    getArticles,getAnArticle,searchArticles }
   from "../controllers/articleController.js"

export  const articleRouter = Express.Router()

articleRouter.post("/postArticle",postArticle)
articleRouter.patch("/editArticle/:id",editArticle)
articleRouter.delete("/deleteArticle/:id",deleteArticle)
articleRouter.get("/getArticles",getArticles)
articleRouter.get("/getAnArticle/:id",getAnArticle)
articleRouter.get("/filter",searchArticles)