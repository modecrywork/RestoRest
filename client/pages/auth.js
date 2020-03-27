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
  const [data, setData] = useState({ username: "", password: "", error: "" });
  const [handleAuth, { data: userData }] = useMutation(AUTH);

  const handleChangedata = name => e => {
    setData({ ...data, [name]: e.target.value });
  };

  const chagneErorr = error => {
    setData({ ...data, error: error });
  };

  const authUser = async () => {
    const { username, password } = data;
    try {
      await handleAuth({ variables: { username, password } });
      chagneErorr("");
    } catch (e) {
      chagneErorr("Данные указанны неккоректно!");
    }
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
      {data.error}
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
