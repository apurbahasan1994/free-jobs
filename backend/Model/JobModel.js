import mongoose, { mongo } from "mongoose";
import { JOB_STATUS, JOB_TYPE } from "../Utility/Utility.js";
const jobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    jobStatus: {
      type: String,
      enum: Object.values(JOB_STATUS),
      default: "pending",
    },
    jobType: {
      type: String,
      enum: Object.values(JOB_TYPE),
      default: "full-time",
    },
    jobLocation: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("job", jobSchema);
