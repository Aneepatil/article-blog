import { User } from "../model/UserModel.js";
import { appError } from "../utils/appError.js";
import { comparePassword } from "../utils/comparePassword.js";
import { hashPassword } from "../utils/hashPassword.js";
import { generateToken } from './../utils/generateToken.js';


// Register User
export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    // Is email registered
    const isEmailExist = await User.findOne({ email });
    if (isEmailExist) {
      return next(appError(500, "Email Already Exist"));
    }

    // Create a new user
    const newUser = await User.create({
      username,
      email,
      password: await hashPassword(password),
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
};


// Login User
export const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // Is email registered
    const isUserExist = await User.findOne({ email });
    if (!isUserExist) return next(appError(404, "Invalid Login Credentials"));

    // Match Password
    const originalPass = await comparePassword(password, isUserExist);

    // Is password matched
    if (!originalPass) return next(appError(404, "Invalid Login Credentials"));

    if (isUserExist && originalPass) {
      const { password, ...rest } = isUserExist._doc;
      const token = await generateToken(isUserExist._id);
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json({success:true,message:'User Logged-in Successfull',data:rest});
    }
  } catch (error) {
    next(error);
  }
};

// Sign out
export const signOut = async (req, res, next) => {
  try {
    res.clearCookie('access_token');
    res.status(200).json('User has been logged out!');
  } catch (error) {
    next(error);
  }
};