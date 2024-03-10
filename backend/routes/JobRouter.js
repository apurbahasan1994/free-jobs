import { Router } from "express";
import {
  deleteJob,
  editJob,
  getJob,
  getJobs,
  createJob
} from "../controllers/JobController.js";
const router = Router();


router.get('/',getJobs);
router.get('/:id',getJob);
router.post('/',createJob);
router.patch('/:id',editJob);
router.delete('/:id',deleteJob);

export default router;