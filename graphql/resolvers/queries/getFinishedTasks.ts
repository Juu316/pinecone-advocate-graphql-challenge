import { Task } from "@/models/mongoose-model";
type GetFinishedTasksInput = {
  userId: string;
};
export const getFinishedTasks = async (
  _: unknown,
  { input }: { input: GetFinishedTasksInput }
) => {
  const finishedTasks = await Task.find({ isDone: true, userId: input.userId });

  return finishedTasks;
};
