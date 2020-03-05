import express from "express";
import next from "next";
import { APP_CONFIG } from "configs/appConfig";

/* Base server structure */
const ssrApp = next({ dev: APP_CONFIG.mode, dir: "./client" });
const handle = ssrApp.getRequestHandler();

ssrApp
  .prepare()
  .then(() => {
    const server = express();
    server.get("*", (req, res) => {
      handle(req, res);
    });

    server.listen(APP_CONFIG.clientPort, (err) => {
      if (err) throw err;
      console.log(`> Client ready on http://localhost:${APP_CONFIG.clientPort}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
