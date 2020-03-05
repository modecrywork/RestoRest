/* main app config */
const dev = process.env.NODE_ENV !== "production";
const serverPort = dev ? 3333 : 6666;

const dbConfig = {
  uri: "mongodb://127.0.0.1:27017/",
  dbName: "Restorest"
};

export const APP_CONFIG = {
  mode: dev,
  serverPort,
  dbConfig
};
