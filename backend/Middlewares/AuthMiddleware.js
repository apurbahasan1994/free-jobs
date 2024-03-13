import { UnauthenticatedError } from "../Errors/CustomError";
import { verifyJwt } from "../Utility/Utility.js";

export const authMiddleware = (req, res, next) => {
  const { token } = req.cookie;
  if (!token) {
    throw new UnauthenticatedError("Authentication failed");
  }
  try {
    const { userId, role } = verifyJwt(token);
    req.user = { userId, role };
    next();
  } catch (e) {
    throw new UnauthenticatedError("Authentication failed");
  }
};
