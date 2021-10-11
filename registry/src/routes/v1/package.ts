import { Router } from "express";
import { withTryCatch } from "../../utils";
import { getPackage, getAllDependencies } from "../../controllers";

const packageRouter = Router();

packageRouter.get("/getPackage/:name/:version", (req, res) =>
  withTryCatch(req, res, getPackage)
);
packageRouter.get("/getDependecies/:name/:version", (req, res) =>
  withTryCatch(req, res, getAllDependencies)
);

export default packageRouter;
