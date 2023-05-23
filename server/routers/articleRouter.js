import  Express  from "express";

import { postArticle,editArticle,deleteArticle,
    getArticles,getAnArticle,searchArticles }
   from "../controllers/articleController.js"
import { verifyUser } from "../middlewares/verifyUser.js";

export  const articleRouter = Express.Router()

articleRouter.post("/postArticle", verifyUser, postArticle)
articleRouter.put("/editArticle/:id", verifyUser, editArticle)
articleRouter.delete("/deleteArticle/:id",deleteArticle)
articleRouter.get("/getArticles",getArticles)
articleRouter.get("/getAnArticle/:id",getAnArticle)
articleRouter.get("/filter",searchArticles)