import { Task } from "@/models/mongoose-model";
export const getAllTasks = async () => {
  const tasks = await Task.find();
  return tasks;
};
