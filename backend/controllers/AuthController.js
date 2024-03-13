import { UnauthenticatedError } from "../Errors/CustomError.js";
import UserModel from "../Model/UserModel.js";
import {
  hashPassword,
  comparePasswrod,
  createJwtToken,
} from "../Utility/Utility.js";
import { StatusCodes } from "http-status-codes";
export const register = async (req, res, next) => {
  const userData = req.body;
  userData.password = await hashPassword(userData.password);
  const user = await UserModel.create(userData);
  return res
    .status(StatusCodes.CREATED)
    .json({ message: "Successfully registered" });
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email: email });
  const isValidUser = user && (await comparePasswrod(password, user.password));
  if (!isValidUser) {
    throw new UnauthenticatedError("Invalid credentials");
  }
  const token = createJwtToken({ user: user._id, role: user.role });
  const fourMin = 1000 * 60 * 4;
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + fourMin),
    secure: process.env.NODE_ENV === "production",
  });
  res.status(StatusCodes.OK).json({ message: "Authentication successfull" });
};

export const logout = (req, res, next) => {
  res.cookie("token", "", {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res
    .status(StatusCodes.OK)
    .json({ message: "Successfully logged out from the system" });
};
