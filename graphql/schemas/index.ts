import { gql } from "graphql-tag";

export const typeDefs = gql`
  scalar Date

  type Task {
    _id: ID!
    taskName: String!
    description: String!
    isDone: Boolean!
    priority: Int!
    tags: [String]
    createdAt: Date
    updatedAt: Date
    userId: String!
  }

  input CreateTaskInput {
    taskName: String!
    description: String!
    priority: Int!
    tags: [String]
    userId: String!
  }

  input UpdateTaskInput {
    taskName: String
    description: String
    priority: Int
    isDone: Boolean
    tagsToAdd: [String]
    tagsToRemove: [String]
  }

  type Query {
    helloQuery: String
    getAllTasks: [Task!]!
    getFinishedTasks: [Task!]!
  }

  type Mutation {
    sayHello(name: String!): String
    addTask(input: CreateTaskInput!): Task!
    updateTask(taskId: ID!, input: UpdateTaskInput!): Task!
  }
`;
