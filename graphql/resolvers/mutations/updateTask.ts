import { Types } from "mongoose";
import { Task } from "@/models/mongoose-model";
type UpdateTaskInput = {
  _id: string; // MongoDB ObjectId string
  taskName?: string;
  description?: string;
  isDone?: boolean;
  priority?: number;
  tags?: string[];
};

export const updateTask = async (
  _: unknown,
  {
    taskId,
    userId,
    input,
  }: { taskId: string; userId: string; input: UpdateTaskInput }
) => {
  const user = await Task.find()
  // const { _id, ...updates } = input;
  // const updatedTask = await Task.findByIdAndUpdate(
  //   _id,
  //   {
  //     ...updates,
  //     updatedAt: new Date(),
  //   },
  //   { new: true } // return the updated document
  // );

  // if (!updatedTask) {
  //   throw new Error("Task not found");
  // }

  // return updatedTask;
};
