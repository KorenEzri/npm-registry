import request from "supertest";
import app from "../src/app";
import { highLevelDependencies, deepDependencies } from "./mocks";

const projectName = "1.npm-registry";

describe(projectName, () => {
  jest.setTimeout(20000);

  test("Can get all high-level dependencies", async () => {
    const { body } = await request(app).get(
      `/api/v1/package/getPackage/${highLevelDependencies.name}/${highLevelDependencies.version}`
    );
    expect(body).toEqual(highLevelDependencies);
  });

  test("Can get all transitive dependencies", async () => {
    const { body } = await request(app).get(
      `/api/v1/package/getDependecies/${deepDependencies.name}/${deepDependencies.version}`
    );
    expect(body).toEqual(deepDependencies.dependencies);
  });
});
