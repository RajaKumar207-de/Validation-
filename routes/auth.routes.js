
import express from "express";
import { register } from "../controller/auth.controller.js";
import { registerValidation } from "../validation/auth.validation.js";

const router = express.Router();

router.post("/register", registerValidation, register);

export default router;
