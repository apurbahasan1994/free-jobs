import { getUserFromRequest } from "../Utility/Utility.js";
import { StatusCodes } from "http-status-codes";
import User from "../Model/UserModel.js";
export const getCurrentUser = async (req, res, next) => {
  const { userId } = getUserFromRequest(req);
  const user = await User.findById(userId);
  res
    .status(StatusCodes.OK)
    .json({ message: "Successfully get the user", data: user.toJSON() });
};

export const getStatistics = (req, res, next) => {};
export const updateUser = (req, res, next) => {};
