import express from "express";
import cors from "cors";
import routes from "./routes";
import connectToDb from "./db/connection";
import loggerMiddleWare from "./logger/morgan";
import http from "http";
import { notFound } from "./utils";

// connectToDb();
const app = express();
const server = http.createServer(app);
app.use(express.json());
app.use(cors());
app.use(loggerMiddleWare);
app.use("/api", routes);
app.use(notFound);
export default server;
