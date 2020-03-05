import { APP_CONFIG } from "configs/appConfig";
import mongoose from "db"; // connect to db
    
import express from "express";
import next from "next";
import cors from "cors";
import expressPlayground from "graphql-playground-middleware-express";

import graphqlServer from "./graphql";

/* Base server structure */
const ssrApp = next({ dev: APP_CONFIG.mode, dir: "./client" });
const handle = ssrApp.getRequestHandler();

/* graphql */
ssrApp
  .prepare()
  .then(() => {
    const server = express();
    server.use(cors());
    server.use("/graphql", graphqlServer);
    server.get(
      "/graphql-interface",
      expressPlayground({ endpoint: "/graphql" })
    );

    server.get("*", (req, res) => {
      handle(req, res);
    });

    server.listen(APP_CONFIG.serverPort, err => {
      if (err) throw err;
      console.log(
        `> Client ready on http://localhost:${APP_CONFIG.serverPort}`,
        `\n> Graphql ready on http://localhost:${APP_CONFIG.serverPort}/graphql`,
        `\n> Graphql interface on http://localhost:${APP_CONFIG.serverPort}/graphql-interface`
      );
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
