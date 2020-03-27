import mongoose from "mongoose";
import { APP_CONFIG } from "configs/appConfig"; // config

const { uri, dbName } = APP_CONFIG.dbConfig;
const dbUri = `${uri}${dbName}`;

mongoose
  .connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(error => console.error(error));

mongoose.connection.on("open", () => console.log("> Mongo DB connected!"));

export default mongoose;
