import { urlencoded } from "body-parser";
import express from "express";

// export the create server function
export const createServer = () => {
  const app = express();
  app
    .use(urlencoded({ extended: true }))
    .get("/", (req, res) => {
      return res.send("hello, i'm Linval, i'm a very slow but happy image server");
    })

  return app;
};