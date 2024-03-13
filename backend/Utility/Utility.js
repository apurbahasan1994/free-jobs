import bcrypt from "bcryptjs";
import jwt, { decode } from "jsonwebtoken";
export const JOB_STATUS = Object.freeze({
  PENDING: "pending",
  INTERVIEW: "interview",
  DECLINED: "declined",
});
export const JOB_TYPE = Object.freeze({
  FULL_IME: "full-time",
  PART_TIME: "part-time",
  INTERNSHIP: "internship",
});

export const JOB_SORT_BY = Object.freeze({
  NEWEST_FIRST: "newest",
  OLDEST_FIRST: "oldest",
  ASC: "asc",
  DESC: "desc",
});

export const USER_ROLES = Object.freeze({
  SUPPER_ADMIN: "superuser",
  CANDIDATE: "candidate",
  COMPANY: "company",
  USER: "user",
});

export const hashPassword = async (password, salt = 10) => {
  const salt = await bcrypt.genSalt(salt);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

export const comparePasswrod = async (passwrod, hashedPassword) => {
  const isPassMatched = await bcrypt.compare(passwrod, hashedPassword);
  return isPassMatched;
};

export const createJwtToken = (payload) => {
  const token = jwt.sign(payload, process.env.SECRET, { expiresIn: 60 * 4 });
  return token;
};

export const verifyJwt = (token) => {
  const decoded = jwt.verify(token, process.env.SECRET);
  return decoded;
};

export const getUserFromRequest = (req) => {
  return { user: req.user.userId, role: req.user.role };
};
