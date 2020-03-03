import express from "express";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const port = dev ? 4000 : 4001;
const ssrApp = next({dev, dir: "./client"});
const handle = ssrApp.getRequestHandler();
const isStart = process.START_MODULE;
isStart && startServer();

ssrApp.prepare().then(() => {
    const server = express();
    server.get("*", (req, res) => {
        handle(req, res);
    });

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`);
    })
}).catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
});
