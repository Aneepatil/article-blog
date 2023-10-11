import express from 'express'
import { article, articles, createArticle, deleteArticle, updateArticle } from '../controllers/articleController.js'
import { verifyUser } from './../utils/verifyUser.js';

const articleRoute = express.Router()

articleRoute.post('/',verifyUser,createArticle)
articleRoute.get('/',articles)
articleRoute.get('/:id',article)
articleRoute.put('/:id',verifyUser,updateArticle)
articleRoute.delete('/:id',verifyUser,deleteArticle)

export default articleRoute