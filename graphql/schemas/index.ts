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
  input GetFinishedTasksInput {
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
    taskId: String
    taskName: String
    description: String
    priority: Int
    isDone: Boolean
    tagsToAdd: [String]
    tagsToRemove: [String]
    userId: String!
  }

  type Query {
    getAllTasks: [Task!]!
    getFinishedTasks(input: GetFinishedTasksInput!): [Task!]!
  }

  type Mutation {
    addTask(input: CreateTaskInput!): Task!
    updateTask(input: UpdateTaskInput!): Task!
  }
`;
