import express from 'express'
import { article, articles, createArticle, deleteArticle, updateArticle } from '../controllers/articleController.js'

const articleRoute = express.Router()

articleRoute.post('/',createArticle)
articleRoute.get('/',articles)
articleRoute.get('/:id',article)
articleRoute.put('/:id',updateArticle)
articleRoute.delete('/:id',deleteArticle)

export default articleRoute