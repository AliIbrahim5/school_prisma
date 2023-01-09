import { Request, Response } from "express";
import { prisma } from "../config/db";

export const AddStudent = async (req: Request, res: Response) => {
  const newStudent = req.body;
  await prisma.student.create({
    data: newStudent,
  });
  res.status(201).json({
    message: "Student Added Successfully",
  });
};

export const getAllStudent = async (req: Request, res: Response) => {
  const Student = await prisma.student.findMany();
  res.status(200).json(Student);
};
