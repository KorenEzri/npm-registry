import { Router } from "express";
import packageRouter from "./package";

const router = Router();

router.use("/package", packageRouter);

export default router;
