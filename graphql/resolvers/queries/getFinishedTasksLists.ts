import { Task } from "@/models/mongoose-model";
export const getFinishedTasksLists = async () => {
  const finishedTasks = await Task.find({ isDone: true });
  return finishedTasks;
};
