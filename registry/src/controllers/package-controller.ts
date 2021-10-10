import { Request, Response } from "express";
import got from "got";
import { INpmPackage } from "../types";

export const getPackage = async (req: Request, res: Response) => {
  const { name, version } = req.params;
  const npmPackage: INpmPackage = await got(
    `https://registry.npmjs.org/${name}`
  ).json();
  const { dependencies } = npmPackage.versions[version];
  return res.status(200).json({ name, version, dependencies });
};
