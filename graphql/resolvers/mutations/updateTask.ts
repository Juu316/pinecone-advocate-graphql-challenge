import { Task } from "@/models/mongoose-model";

type UpdateTaskInput = {
  taskId: string; // MongoDB ObjectId string
  taskName?: string;
  description?: string;
  isDone?: boolean;
  priority?: number;
  tags?: string[];
  userId: string;
};

export const updateTask = async (
  _: unknown,
  { input }: { input: UpdateTaskInput }
) => {
  const {
    taskId,
    taskName,
    description,
    isDone,
    priority,
    tags = [],
    userId,
  } = input;
  console.log(input);
  // 1. Find the task by ID
  const task = await Task.findById(taskId);
  if (!task) throw new Error("Task not found");

  // 2. Check ownership
  if (task.userId !== userId) {
    throw new Error("Unauthorized: You do not own this task");
  }

  // 3. Validate fields
  if (typeof priority !== "undefined" && (priority < 1 || priority > 5)) {
    throw new Error("Priority must be between 1 and 5.");
  }
  if (
    typeof description === "string" &&
    typeof taskName === "string" &&
    description === taskName
  ) {
    throw new Error("Description can't be the same as taskName.");
  }
  if (tags.length > 5) {
    throw new Error("You can provide up to 5 tags only.");
  }

  // 4. Update only provided fields
  if (typeof taskName === "string") task.taskName = taskName;
  if (typeof description === "string") task.description = description;
  if (typeof isDone === "boolean") task.isDone = isDone;
  if (typeof priority === "number") task.priority = priority;
  if (tags.length) task.tags = tags;

  task.updatedAt = new Date();

  // 5. Save and return updated task
  return await task.save();
};
