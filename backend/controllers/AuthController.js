import UserModel from "../Model/UserModel.js";
import { hashPassword } from "../Utility/Utility.js";
import { StatusCodes } from "http-status-codes";
export const register = async (req, res, next) => {
  const userData = req.body;
  userData.password = await hashPassword(userData.password);
  const user = await UserModel.create(userData);
  return res
    .status(StatusCodes.CREATED)
    .json({ message: "Successfully registered" });
};

export const login = (req, res, next) => {};
