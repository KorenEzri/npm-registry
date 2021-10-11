import { Request, Response } from "express";
import got from "got";
import { INpmPackage, IDependency } from "../types";

const getDependencies = async (name: string, version: string) => {
  if (version.startsWith("^")) version = version.substring(1);
  const npmPackage: INpmPackage = await got(
    `https://registry.npmjs.org/${name}`
  ).json();
  const dependencies = npmPackage.versions[version]?.dependencies;
  return dependencies ? fromRecordsToArray(dependencies) : false;
};

const fromRecordsToArray = (dependencies: { [name: string]: string }) => {
  const dependencyList: IDependency[] = Object.keys(dependencies).map(
    (dependency) => {
      return { name: dependency, version: dependencies[dependency] };
    }
  );
  return dependencyList;
};

export const getTransitiveDependencies = async (
  name: string,
  version: string
) => {
  const dependencies = await getDependencies(name, version);
  if (!dependencies) return "No more dependencies";
  return await Promise.all(
    dependencies.map(async (dep) => {
      const nextDependencies = await getTransitiveDependencies(
        dep.name,
        dep.version
      );
      dep.dependencies = nextDependencies;
      return dep;
    })
  );
};

export const getAllDependencies = async (req: Request, res: Response) => {
  const { name, version } = req.params;
  const dependencies = await getTransitiveDependencies(name, version);
  res.status(200).send(dependencies);
};
export const getPackage = async (req: Request, res: Response) => {
  const { name, version } = req.params;
  const dependencies = await getDependencies(name, version);
  return res.status(200).json({ name, version, dependencies });
};
