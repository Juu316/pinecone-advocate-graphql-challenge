import { getAllTasks } from "@/graphql/resolvers/queries/getAllTasks";
import { connectMongoose } from "@/mongoose/mongoose-connection";
import mongoose from "mongoose";

describe("getAllTasks Query", () => {
  beforeAll(async () => {
    await connectMongoose();
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it("should return an array", async () => {
    const result = await getAllTasks();
    expect(Array.isArray(result)).toBe(true);
  });
});
