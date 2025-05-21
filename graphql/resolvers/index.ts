import { getFinishedTasks } from "./queries/getFinishedTasks";
import { getAllTasks } from "./queries/getAllTasks";
import { addTask } from "./mutations/addTask";
import { updateTask } from "./mutations/updateTask";
import { deleteTask } from "./mutations/deleteTask";
export const resolvers = {
  Query: {
    getFinishedTasks,
    getAllTasks,
  },
  Mutation: {
    addTask,
    updateTask,
    deleteTask,
  },
};
