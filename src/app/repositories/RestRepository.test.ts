import { FetchedRobot } from "../../features/robots/models/Robot";
import RestRepository from "./RestRepository";

describe("Given the RestRepository class and we make an instance", () => {
  const url = "";
  const repo = new RestRepository(url);

  test("Then it should be used", () => {
    expect(repo).toBeTruthy();
  });

  describe("When the method getAll is invoked", () => {
    test("And the API response is succesfull. it should reutrn all the data", async () => {
      const dataMocked: FetchedRobot = {
        robots: [
          { creationDate: "", endurance: 8, imageURL: "", name: "", speed: 1 },
        ],
      };
      global.fetch = jest
        .fn()
        .mockResolvedValue({ json: jest.fn().mockResolvedValue(dataMocked) });

      const resultedData = await repo.getAll();

      expect(resultedData).toStrictEqual(dataMocked);
    });

    test("And when there is a JS error it should throw an error", async () => {
      global.fetch = jest.fn().mockResolvedValue(Error);

      await repo.getAll();

      expect(repo.getAll).toThrowError();
    });
  });
});
