import JobModel from "../Model/JobModel.js";
export const getJob = async (req, res, next) => {
  const { id } = req.params;
  const job = await JobModel.findOne({_id:id});
  if (!job) {
    return res.status(404).json({ message: "No Job found", data: null });
  }
  return res.status(200).json({ message: "success", data: job });
};
export const getJobs = (req, res, next) => {
  const jobs = JobModel.find({ createdBy: req.user.userId });
  return res.json({ message: "get jobs called", data: jobs });
};
export const editJob = (req, res, next) => {
  const { id, ...rest } = req.body;
  const updatedJob = JobModel.findByIdAndUpdate(id, rest, {
    new: true,
  });
  if (!updatedJob) {
    return res
      .status(404)
      .json({ message: "No job found to modify", data: null });
  }
  return res.json({ message: "Successfully edited job", data: updatedJob });
};
export const deleteJob = async (req, res, next) => {
  const { id } = req.params;
  const job = await JobModel.findByIdAndDelete(id);
  if (!job) {
    return res
      .status(404)
      .json({ message: "Could not delete the job", data: null });
  }
  return res
    .status(200)
    .json({ data: job, message: "Successfully deleted the job" });
};

export const createJob = async (req, res, next) => {
  const createdBy = req.user.userId;
  const { company, position, jobLocation, jobStatus, jobType } = req.body;
  const job = await JobModel.create({
    company,
    position,
    jobLocation,
    createdBy,
    jobStatus,
    jobType,
  });
  return res
    .status(201)
    .json({ message: "Successfully created the job", data: job });
};
