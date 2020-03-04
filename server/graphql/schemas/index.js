import { schemaComposer } from "graphql-compose";
// schemas compose
import "./Cat";
import "./Dog";

const graphqlShchema = schemaComposer.buildSchema();

export default graphqlShchema;
