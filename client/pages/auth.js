import ApolloClient from "apollo-client";
import fetch from "node-fetch";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { useState } from "react";
import { useMutation, ApolloProvider } from "@apollo/react-hooks";

import AUTH from "../graphql/auth";

const client = new ApolloClient({
  link: createHttpLink({
    uri: "/graphql",
    fetch: fetch
  }),
  cache: new InMemoryCache()
});

const Form = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const [handleAuth, { data: userData }] = useMutation(AUTH);

  const handleChangedata = name => e => {
    setData({ ...data, [name]: e.target.value });
  };

  const authUser = async () => {
    const { username, password } = data;
    return await handleAuth({ variables: { username, password } });
  };

  const handleLogin = e => {
    e.preventDefault();
    console.log(authUser());
  };

  return (
    <form>
      <input
        type="text"
        name="username"
        onChange={handleChangedata("username")}
      />
      <br />
      <br />
      <input
        type="password"
        name="password"
        onChange={handleChangedata("password")}
      />
      <br />
      <button onClick={handleLogin}>login</button>
    </form>
  );
};

const Index = () => {
  return (
    <ApolloProvider client={client}>
      <Form />
    </ApolloProvider>
  );
};

export default Index;
