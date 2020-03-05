import { APP_CONFIG } from "configs/appConfig";
import mongoose from "db"; // connect to db

import express from "express";
import next from "next";
import cors from "cors";

import apolloServer from "./graphql";

/* Base server structure */
const ssrApp = next({ dev: APP_CONFIG.mode, dir: "./client" });
const handle = ssrApp.getRequestHandler();

/* graphql */
ssrApp
  .prepare()
  .then(() => {
    const app = express();
    apolloServer.applyMiddleware({ app });
    app.use(cors());

    app.get("*", (req, res) => {
      handle(req, res);
    });

    app.listen(APP_CONFIG.serverPort, err => {
      if (err) throw err;
      console.log(
        `> Client ready on http://localhost:${APP_CONFIG.serverPort}`,
        `\n> Graphql ready on http://localhost:${APP_CONFIG.serverPort}/graphql`
      );
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
