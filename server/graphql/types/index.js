import { schemaComposer } from "graphql-compose";
// schemas compose
import "./Cat";
import "./Dog";
import "./User/User";

const graphqlShchema = schemaComposer.buildSchema();

export default graphqlShchema;
