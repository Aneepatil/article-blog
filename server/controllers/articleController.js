import { Article } from "../model/ArticleModel.js";
import { appError } from "../utils/appError.js";

export const createArticle = async (req, res, next) => {
  try {
    const newArticle = await Article.create(req.body)
    res.status(201).json({
        success: true,
        message: "Articles created successfully",
        data: newArticle,
      });
  } catch (error) {}
};

export const articles = async (req, res, next) => {
  try {
    const articles = await Article.find();
    res.status(200).json({
      success: true,
      message: "Articles fetched successfully",
      data: articles,
    });
  } catch (error) {
    next(error);
  }
};

export const article = async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Article fetched successfully",
      data: article,
    });
  } catch (error) {}
};

export const updateArticle = async (req, res, next) => {
  const { id } = req.params;
  const { title, category, desctiption } = req.body;
  try {
    const updateWrticle = await Article.findByIdAndUpdate(id,{ title, category, desctiption },{new:true})
  } catch (error) {
    next(error)
  }
};

export const deleteArticle = async (req, res, next) => {
  const { id } = req.params;
  try {
    const article = await Article.findOne({ id });
    if (!article) return next(appError(404, "Article not found..."));
    await Article.findByIdAndDelete(id);
    res
      .status(200)
      .json({ sucess: true, message: "Article deleted successfully.." });
  } catch (error) {
    next(error);
  }
};
