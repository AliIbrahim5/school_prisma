import express from "express";
import {
  GetClassRoomWithId,
  addClassRoom,
  getAllClassRoom,
} from "../controller/classRoom.control";

const router = express.Router();

router.post("/", addClassRoom);
router.get("/", getAllClassRoom);
router.get("/:id", GetClassRoomWithId);

export default router;
