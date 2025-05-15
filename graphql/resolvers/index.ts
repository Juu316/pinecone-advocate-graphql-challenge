import { sayHello } from "./mutations/say-hello";
import { helloQuery } from "./queries/hello-query";
import { getFinishedTasksLists } from "./queries/getFinishedTasksLists";
import { getAllTasks } from "./queries/getAllTasks";
import { addTask } from "./mutations/addTask";
import { updateTask } from "./mutations/updateTask";
export const resolvers = {
  Query: {
    helloQuery,
    getFinishedTasksLists,
    getAllTasks,
  },
  Mutation: {
    sayHello,
    addTask,
    updateTask,
  },
};
