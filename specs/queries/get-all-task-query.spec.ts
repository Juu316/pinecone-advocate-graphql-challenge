// import { getAllTasks } from "@/graphql/resolvers/queries/getAllTasks";
// import { connectMongoose } from "@/mongoose/mongoose-connection";
// import mongoose from "mongoose";
// describe("getAllTasks Query", () => {
//   it("should return an array (mocked)", async () => {
//     // If getAllTasks is async, use await
//     await connectMongoose();
//     const result = await getAllTasks();
//     expect(Array.isArray([])).rejects.toThrow(mongoose.Error.ValidationError);
//     console.log(result);
//   });
//});
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
    // Optionally, check for shape or length
    // expect(result.length).toBeGreaterThanOrEqual(0);
    // expect(result[0]).toHaveProperty("taskName");
  });
});
