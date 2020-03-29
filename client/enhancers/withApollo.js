import ApolloClient from "apollo-client";
import withApollo from "next-with-apollo";
import fetch from "node-fetch";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";

export default withApollo(
  ({ intialState }) => {
    return new ApolloClient({
      link: createHttpLink({
        uri: "/graphql",
        fetch: fetch
      }),
      cache: new InMemoryCache()
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    }
  }
);
