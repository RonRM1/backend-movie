import User from "../models/User.js";
import { hashSync } from "bcrypt";

const UserController = {};

UserController.getAll = async (req, res) => {
  try {
    const users = await User.find();

    return res.status(200).json({
      success: true,
      message: "Get all users retrieved succsessfully",
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error retrieving users",
      error: error.message,
    });
  }
};

UserController.get = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({ _id: id });

    return res.status(200).json({
      success: true,
      message: "Get user retrieved succsessfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error retrieving user",
      error: error.message,
    });
  }
};

UserController.delete = async (req, res) => {
  try {
    const { id } = req.params;

    await User.deleteOne({ _id: id });

    return res.status(200).json({
      success: true,
      message: "Delete user successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error removing  user",
      error: error?.message || error,
    });
  }
};

UserController.update = async (req, res) => {
  try {
    const { id } = req.params;

    const { name, email, password, role } = req.body;

    if (name == null) {
      return res.status(500).json({
        success: false,
        message: "Name is required!",
      });
    }

    const encryptedPassword = hashSync(password, 10);

    const user = {
      name: name,
      email: email,
      password: encryptedPassword,
      role: role,
    };

    await User.updateOne({ _id: id }, user);

    return res.status(200).json({
      success: true,
      message: "Update user successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error updating  user",
      error: error?.message || error,
    });
  }
};

export default UserController;
