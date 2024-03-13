import mongoose from "mongoose";
import { USER_ROLES } from "../Utility/Utility.js";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: Object.values(USER_ROLES),
    default: USER_ROLES.USER,
  },
});

// method to transform the document before sending it as JSON
userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  // Exclude the password field from the JSON representation
  delete obj.password;
  return obj;
};

const User = mongoose.model("User", UserSchema);
export default User;
