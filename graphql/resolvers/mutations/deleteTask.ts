import { Task } from "@/models/mongoose-model";
type DeleteTaskInput = {
  taskId: string; // MongoDB ObjectId string
  userId: string;
};
export const deleteTask = async (
  _: unknown,
  { input }: { input: DeleteTaskInput }
) => {
  const {
    taskId,
    userId,
  } = input;
  const task = await Task.findById(taskId);

  //  Check userID
  //   if (!task?.userId) {
  //     throw new Error("User ID not found");
  //   }
  //  Find the task by ID

  if (!task) throw new Error("Task not found");
  //  Check ownership
  if (task.userId !== userId) {
    throw new Error("Unauthorized: You do not own this task");
  }

  const deletedTask = await Task.findByIdAndDelete(taskId);
  return deletedTask;
};
