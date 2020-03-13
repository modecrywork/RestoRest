import { APP_CONFIG } from "configs/appConfig";
import mongoose from "db"; // connect to db
import passportConfig from "configs/passport.config";

import express from "express";
import next from "next";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import fileStore from "session-file-store";

import apolloServer from "./graphql";
import authMiddleware from "./middlewares/auth";


/* Base server structure */
const ssrApp = next({ dev: APP_CONFIG.mode, dir: "./client" });
const handle = ssrApp.getRequestHandler();

const FileStore = fileStore(session);
ssrApp
  .prepare()
  .then(() => {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(
      session({
        secret: "magic_kebab",
        store: new FileStore(),
        cookie: {
          path: "/",
          httpOnly: true,
          maxAge: 60 * 60 * 1000
        },
        resave: true,
        saveUninitialized: false
      })
    );
    app.use(passport.initialize());
    app.use(passport.session());
    apolloServer.applyMiddleware({ app });
    app.all(["/"], authMiddleware);
    app.get("*", handle);

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
