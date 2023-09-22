import "reflect-metadata";
import { config as dotEnvConfg } from "dotenv";
dotEnvConfg();
import config from "./config";
import path from "path";
import express from "express";
import { Container } from "typedi";
import { useExpressServer, useContainer } from "routing-controllers";
import { CustomErrorHandler } from "./middlewares/CustomErrorHandler";

const app = express();
const port = parseInt(config.port);

app.use(express.json());

useContainer(Container);
useExpressServer(app, {
  controllers: [path.join(__dirname, "/controllers/*.js")],
  middlewares: [CustomErrorHandler],
  classTransformer: false,
  defaultErrorHandler: false,
  cors: true,
});

app.get("/", (req, res) => {
  res.send("Welcome to Todo");
});

app.listen(port, () => {
  console.log("app listening to port");
});
