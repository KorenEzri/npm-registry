import { Router } from "express";
import { withTryCatch } from "../../utils";
import { getPackage } from "../../controllers";

const packageRouter = Router();

packageRouter.get("/getPackage/:name/:version", (req, res) =>
  withTryCatch(req, res, getPackage)
);

export default packageRouter;
