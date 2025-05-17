import { getFinishedTasks } from "@/graphql/resolvers/queries/getFinishedTasks";
import { connectMongoose } from "@/mongoose/mongoose-connection";
import mongoose from "mongoose";
import { GetFinishedTasksInput } from "@/generated";
describe("getFinishedTasks Query", () => {
  beforeAll(async () => {
    await connectMongoose();
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });
  it("should return an array", async () => {
    const input: GetFinishedTasksInput = {
      userId: "some-user-id", // Replace with a real test ID
    };

    const result = await getFinishedTasks({ input });
    expect(Array.isArray(result)).toBe(true);
  });
});

