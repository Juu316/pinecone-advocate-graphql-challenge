import { Task } from "@/models/mongoose-model"; // Adjust path to your Task model

interface CreateTaskInput {
  taskName: string;
  description: string;
  priority: number;
  tags?: string[];
  userId: string;
}

export const createTask = async (
  _: unknown,
  { input }: { input: CreateTaskInput }
) => {
  const { taskName, description, priority, tags = [], userId } = input;

  // Validate description
  if (description.length < 10) {
    throw new Error("Description must be at least 10 characters long.");
  }

  // Validate priority
  if (priority < 1 || priority > 5) {
    throw new Error("Priority must be between 1 and 5.");
  }

  const newTask = new Task({
    taskName,
    description,
    priority,
    tags,
    userId,
    isDone: false, // Default
  });
  console.log(input);
  return await newTask.save();
};
