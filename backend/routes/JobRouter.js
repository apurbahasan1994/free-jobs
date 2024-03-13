import { Router } from "express";
import {
  deleteJob,
  editJob,
  getJob,
  getJobs,
  createJob,
} from "../Controllers/JobController.js";
import {
  validateJobInput,
  validateIdParam,
} from "../Middlewares/ValidationMiddleWare.js";
import { authMiddleware } from "../Middlewares/AuthMiddleware.js";
const router = Router();

router.get("/", authMiddleware, getJobs);
router.get("/:id", authMiddleware, validateIdParam, getJob);
router.post("/", authMiddleware, validateJobInput, createJob);
router.patch("/:id", authMiddleware, validateJobInput, editJob);
router.delete("/:id", authMiddleware, validateIdParam, deleteJob);

export default router;
