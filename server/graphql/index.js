import graphqlHTTP from "express-graphql";
import graphqlShchema from "./schemas";

const graphqlServer = graphqlHTTP({schema:graphqlShchema});

export default graphqlServer;
