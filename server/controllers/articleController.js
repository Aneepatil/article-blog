import { Article } from "../model/ArticleModel.js";
import { appError } from "../utils/appError.js";

// Create a article
export const createArticle = async (req, res, next) => {
  const { title, category, desctiption } = req.body;
  console.log(req.user);
  try {
    const newArticle = await Article.create({
      userId: req.user,
      title,
      category,
      desctiption,
    });
    res.status(201).json({
      success: true,
      message: "Articles created successfully",
      data: newArticle,
    });
  } catch (error) {
    next(error);
  }
};


// Get all articles
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

// Get single articl
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


// Update article
export const updateArticle = async (req, res, next) => {
  const { id } = req.params;
  const { title, category, desctiption } = req.body;
  try {
    
    // Find the article by ID
    const article = await Article.findById(id);
    if (!article) return next(appError(404, "Article not found..."));

    // Find, if article is created by logged in user
    if (req.user !== article.userId.toString())
      return next(appError(403, "You only can update your own article..."));

    // Update the article
    const updateWrticle = await Article.findByIdAndUpdate(
      id,
      { title, category, desctiption },
      { new: true }
    );

    // Send response
    res.status(200).json({
      success: true,
      message: "Article Updated successfully",
      data: updateWrticle,
    });
  } catch (error) {
    next(error);
  }
};


// Delete article
export const deleteArticle = async (req, res, next) => {
  const { id } = req.params;
  try {
    // Find article by ID
    const article = await Article.findById(id);
    if (!article) return next(appError(404, "Article not found..."));

    // Find, if article is created by logged in user
    if (req.user !== article.userId.toString())
      return next(appError(403, "You only can update your own article..."));    
    
      // Delete
    await Article.findByIdAndDelete(id);
    // Send response
    res
      .status(200)
      .json({ sucess: true, message: "Article deleted successfully.." });
  } catch (error) {
    next(error);
  }
};
