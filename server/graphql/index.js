import { buildContext } from "graphql-passport";
import { ApolloServer } from "apollo-server-express";
import graphqlShchema from "./types";


const apolloServer = new ApolloServer({
  schema: graphqlShchema,
  context: ({ req, res }) => buildContext({ req, res })
});

export default apolloServer;
