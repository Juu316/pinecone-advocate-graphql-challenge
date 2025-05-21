import { Task } from "@/models/mongoose-model";
import { deleteTask } from "@/graphql/resolvers/mutations/deleteTask";
jest.mock("../../models/mongoose-model");
describe("deleteTask Mutation", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should delete a task and return a success message", async () => {
    // Mock Task.findByIdAndDelete to resolve to a fake task
    Task.findByIdAndDelete = jest
      .fn()
      .mockResolvedValue({ _id: "123", taskName: "Test Task" });

    const input = { userId: "user1", taskId: "123" };
    const result = await deleteTask({}, { input });

    expect(Task.findByIdAndDelete).toHaveBeenCalledWith("123");
    expect(result).toBe("Task deleted successfully");
  });

  it("should throw an error if task not found", async () => {
    Task.findByIdAndDelete = jest.fn().mockResolvedValue(null);

    const input = { userId: "user1", taskId: "notfound" };

    await expect(deleteTask({}, { input })).rejects.toThrow("Task not found");
  });
  it("should throw an error if task not found", async () => {
    Task.findByIdAndDelete = jest.fn().mockResolvedValue(null);

    const input = { userId: "notfound", taskId: "123" };

    await expect(deleteTask({}, { input })).rejects.toThrow("User not found");
  });
});
