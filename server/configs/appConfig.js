/* main app config */
const dev = process.env.NODE_ENV !== "production";
const clientPort = dev ? 4000 : 4001;
const serverPort = dev ? 5000 : 5001;

const dbConfig = {
  uri: "mongodb://127.0.0.1:27017/",
  dbName: "Restorest"
};

export const APP_CONFIG = {
  mode: dev,
  clientPort,
  serverPort,
  dbConfig
};
