import { User } from "../model/UserModel.js";
import { appError } from "../utils/appError.js";
import { hashPassword } from "../utils/hashPassword.js";

// Get all Users
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

// Get Single User
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) return next(errorHandler(404, "User not found!"));

    const { password: pass, ...rest } = user._doc;

    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

// Update User

export const updateUser = async (req, res, next) => {
  if (req.user !== req.params.id) {
    return next(appError(403, "You only can update your own account"));
  }

  try {
    // Hash the password again
    if (req.body.password) {
      req.body.password = await hashPassword(req.body.password);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;

    res.status(200).json({
      success: true,
      message: "User updated Successfully..",
      data: rest,
    });
  } catch (error) {
    next(error);
  }
};

// Delete User
export const deleteUser = async (req, res, next) => {
  console.log(req.user);
  if (req.user !== req.params.id)
    return next(appError(401, "You can only delete your own account!"));
  try {
    await User.findByIdAndDelete(req.params.id);
    res.clearCookie("access_token");
    res.status(200).json("User has been deleted!");
  } catch (error) {
    next(error);
  }
};
