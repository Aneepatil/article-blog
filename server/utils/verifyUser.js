import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import { appError } from './appError.js';
dotenv.config()

export const verifyUser = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return next(appError(401, 'Unauthorized'));

  jwt.verify(token, process.env.JWT_SEC_KEY, (err, user) => {
    if (err) return next(appError(403, 'Token is Invalid / Expired..'));
    req.user = user.id;
    next();
  });
};