import { Task } from "@/models/mongoose-model";
type GetFinishedTasksInput = {
  userId: string;
};
export const getFinishedTasks = async ({
  input,
}: {
  input: GetFinishedTasksInput;
}) => {
  const userTasks = await Task.find({ userId: input.userId });
  if (!userTasks || userTasks.length === 0) {
    throw new Error("UserId does not exist.");
  }
  const finishedTasks = await Task.find({ isDone: true, userId: input.userId });
  if (!finishedTasks || finishedTasks.length === 0) {
    throw new Error("No finished tasks found for the given userId.");
  }
  return finishedTasks;
};
