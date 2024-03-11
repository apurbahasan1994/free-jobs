import { body, validationResult, param } from "express-validator";
import { BadRequestError } from "../Errors/CustomError.js";
import { JOB_STATUS, JOB_TYPE } from "../Utility/Utility.js";
import mongoose from "mongoose";
import User from "../Model/UserModel.js";
export const validationErrors = (validateValues) => {
  return [validateValues, validateRequest];
};

const validateRequest = (req, _, next) => {
  console.log("ye");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((x) => x.msg);
    throw new BadRequestError(errorMessages);
  }
  next();
};

export const validateJobInput = validationErrors([
  body("company").notEmpty().withMessage("Company name is required"),
  body("jobLocation").notEmpty().withMessage("Job location is rquired"),
  body("position").notEmpty().withMessage("Job position is required"),
  body("jobStatus")
    .optional()
    .isIn(Object.values(JOB_STATUS))
    .withMessage("Not a valid job status"),
  body("jobType")
    .optional()
    .isIn(Object.values(JOB_TYPE))
    .withMessage("Not a valid job type"),
]);

export const validateIdParam = validationErrors([
  param("id")
    .custom((value) => mongoose.Types.ObjectId.isValid(value))
    .withMessage("Invalid id"),
]);

export const validateRegisterInput = validationErrors([
  body("firstName").notEmpty().withMessage("firstName is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("Valid email is required")
    .custom(async (value) => {
      if (await User.findOne({ email: value })) {
        throw new BadRequestError("Email already exist");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("pass must be 8 characters long")
    .isAlphanumeric()
    .withMessage("password must contain letter symbol and numbers"),
  body("location").notEmpty().withMessage("location is required"),
]);

