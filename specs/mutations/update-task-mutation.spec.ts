import { updateTask } from "@/graphql/resolvers/mutations/updateTask";
import { Task } from "@/models/mongoose-model";

jest.mock("../../models/mongoose-model");

describe("addTask Mutation", () => {
  const mockTaskCreate = Task.create as jest.Mock;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should create a new task and return it", async () => {
    const input = {
      taskName: "Test Task",
      description: "A test description",
      priority: 1,
      userId: "user123",
      taskId: "TASKIDVALUE",
    };
    const mockTask = { ...input, _id: "taskid", isDone: false };
    mockTaskCreate.mockResolvedValueOnce(mockTask);
    const result = await updateTask({}, { input });
    expect(result).toMatchObject(mockTask);
    expect(mockTaskCreate).toHaveBeenCalledWith(input);
  });

  it("should throw an error if description is too short", async () => {
    const input = {
      taskName: "Test Task",
      description: "short",
      priority: 1,
      userId: "user123",
      taskId: "TASKIDVALUE",
    };

    await expect(updateTask({}, { input })).rejects.toThrow();
  });
  
});
