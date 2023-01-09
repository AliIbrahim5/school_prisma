import { Request, Response } from "express";
import { prisma } from "../config/db";

export const addClassRoom = async (req: Request, res: Response) => {
  const newRoom = req.body;
  await prisma.classRoom.create({
    data: newRoom,
  });
  res.status(201).json({
    message: "Classroom created successfully",
  });
};

export const getAllClassRoom = async (req: Request, res: Response) => {
  const classRomm = await prisma.classRoom.findMany();
  res.status(201).json(classRomm);
};

export const GetClassRoomWithId = async (req: Request, res: Response) => {
  const { id } = req.params;

  const classRoom = await prisma.classRoom.findMany({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      teacher: true,
      student: true,
    },
  });
  res.status(200).json({ classRoom });
};
