import express from "express";
import { connectDB } from "./config/db";
import Teacher from "./routes/teacher.router";
import Student from "./routes/student.router";
import ClassRoom from "./routes/classRoom.router";

const app = express();
app.use(express.json());
connectDB();

app.use("/Teacher/v1", Teacher);
app.use("/Student/v1", Student);
app.use("/ClassRoom/v1", ClassRoom);

app.listen(5001, () => {
  console.log("listening on port 5000");
});
