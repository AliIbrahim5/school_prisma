import { Request, Response } from "express";
import { prisma } from "../config/db";

export const AddTeacher = async (req: Request, res: Response) => {
  const newTeacher = req.body;
  await prisma.teacher.create({
    data: newTeacher,
  });
  res.status(201).json({
    message: "Teacher added successfully",
  });
};

export const GetAllTeacher = async (req: Request, res: Response) => {
  const Teacher = await prisma.teacher.findMany();
  res.status(200).json(Teacher);

};
