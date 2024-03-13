import { Router } from "express";
import { login, register, logout } from "../Controllers/AuthController.js";
import {
  validateRegisterInput,
  validateLoginInput,
} from "../Middlewares/ValidationMiddleWare.js";
const router = Router();

router.post("/register", validateRegisterInput, register);
router.post("/login", validateLoginInput, login);
router.post("/get", logout);

export default router;
