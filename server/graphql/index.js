import { ApolloServer }  from 'apollo-server-express';
import graphqlShchema from "./schemas";

const apolloServer = new ApolloServer({schema: graphqlShchema});

export default apolloServer;
