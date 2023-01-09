import express from "express";
import { AddStudent, getAllStudent } from "../controller/student.control";

const router = express.Router();

router.post("/", AddStudent);
router.get("/", getAllStudent);

export default router;
