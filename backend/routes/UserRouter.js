import { Router } from "express";
import {
  getCurrentUser,
  getStatistics,
  updateUser
} from "../Controllers/UserCiontroller.js";
const router = Router();

router.get("/current-user", getCurrentUser);
router.get("/admin/get-statistics", getStatistics);
router.get("/upadate-user", updateUser);
export default router;
