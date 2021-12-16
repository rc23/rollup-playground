import bodyParser from "body-parser";
import express from "express";
import path from "path";
import security from "./middlewares/security.js";

const __dirname = path.resolve();
const bodyParserMiddleware = bodyParser.urlencoded({ extended: false });

const renderHello = () => async (_, res) => {
  res.render("hello", {
    nonce: res?.locals?.nonce,
  });
};

export default () => {
  const app = express();

  app.use([bodyParserMiddleware, bodyParser.json()]);
  app.use("/", express.static("dist"));
  app.use("/favicon.ico", (_, res) => res.status(200).send());

  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "/dist/views"));
  app.set("trust proxy", 1);

  app.use(security);

  app.get("/", renderHello());

  return app;
};
