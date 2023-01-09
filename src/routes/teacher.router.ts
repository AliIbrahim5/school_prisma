import { AddTeacher, GetAllTeacher } from "../controller/teacher.control";
import express from "express";

const router = express.Router();

router.post("/", AddTeacher);
router.get("/", GetAllTeacher);

export default router;
