import express from "express";
import cors from "cors";
import expressPlayground from "graphql-playground-middleware-express";

import { APP_CONFIG } from "configs/appConfig";

import graphqlServer from "./graphql";

import mongoose from "db"; // connect to db

const app = express();

app.use(cors());
app.use("/graphql", graphqlServer);
app.get("/graphql-interface", expressPlayground({ endpoint: "/graphql" })); // graphql interface middleware for express

app.listen(APP_CONFIG.serverPort, (req, res) => {
  console.log(`> graphql start on: http://localhost:${APP_CONFIG.serverPort}`);
});
