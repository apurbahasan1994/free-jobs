import { Router } from "express";
import {
  deleteJob,
  editJob,
  getJob,
  getJobs,
  createJob,
} from "../Controllers/JobController.js";
import { validateJobInput,validateIdParam } from "../Middlewares/ValidationMiddleWare.js";
const router = Router();

router.get("/", getJobs);
router.get("/:id", validateIdParam, getJob);
router.post("/", validateJobInput, createJob);
router.patch("/:id", validateJobInput, editJob);
router.delete("/:id", validateIdParam, deleteJob);

export default router;
