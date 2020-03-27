// configs
import { APP_CONFIG } from "configs/appConfig";
import mongoose from "db"; // connect to db
import passportConfig from "configs/passport.config"; // passport config

// main
import express from "express";
import next from "next";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import redis from "redis";
import ConnectRedis from "connect-redis";

import apolloServer from "./graphql";
import authMiddleware from "./middlewares/auth";

/* Sessions */
const RedisStore = ConnectRedis(session);
const redisClient = redis.createClient({ url: APP_CONFIG.redisUrl });

/* Base server structure */
const ssrApp = next({ dev: APP_CONFIG.mode, dir: "./client" });
const handle = ssrApp.getRequestHandler();

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
        store: new RedisStore({ client: redisClient }),
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

    app.get("/auth", (req, res, next) => {
      if (req?.isAuthenticated()) res.redirect("/");
      next();
    });
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
