import express from "express";
import cors from "cors";
import expressPlayground from "graphql-playground-middleware-express";

import graphqlServer from "./graphql";
import mongoose from "db";

const isDev = process.NODE_ENV !== "production";
const port = isDev ? 5000 : 5001;
const app = express();

app.use(cors());

app.use("/graphql", graphqlServer);
app.get('/graphql-interface', expressPlayground({endpoint: '/graphql'}));

app.listen(port, (req, res) => {
    console.log(`> graphql start on: http://localhost:${port}`);
});

