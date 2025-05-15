import { sayHello } from "./mutations/say-hello";
import { helloQuery } from "./queries/hello-query";
import { getFinishedTasksLists } from "./queries/getFinishedTasksLists";
import { getAllTasks } from "./queries/getAllTasks";
import { createTask } from "./mutations/createTask";
export const resolvers = {
  Query: {
    helloQuery,
    getFinishedTasksLists,
    getAllTasks,
  },
  Mutation: {
    sayHello,
    createTask,
  },
};
