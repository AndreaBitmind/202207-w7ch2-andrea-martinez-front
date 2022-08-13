import Robot from "../../features/robots/models/Robot";
import RestRepository from "./RestRepository";

describe("Given the RestRepository class", () => {
  describe("When we make an instance", () => {
    const url = "";
    const repo = new RestRepository(url);

    test("Then it should be used", () => {
      expect(repo).toBeTruthy();
    });

    test("And then the method getAll should reutrn all the data", async () => {
      const dataMocked: Array<Robot> = [];
      global.fetch = jest
        .fn()
        .mockResolvedValue({ json: jest.fn().mockResolvedValue(dataMocked) });

      const resultedData = await repo.getAll();

      expect(resultedData).toStrictEqual(dataMocked);
    });
  });
});
