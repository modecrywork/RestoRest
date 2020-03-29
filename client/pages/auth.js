import { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import AUTH_USER from "graphQL/auth";
// containers
import AuthContainer from "components/containers/auth/";

const Form = () => {
  const [data, setData] = useState({ username: "", password: "", error: "" });
  const [handleAuth, { data: userData }] = useMutation(AUTH_USER);

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

const Auth = () => {
  return <AuthContainer />;
};

export default Auth;
