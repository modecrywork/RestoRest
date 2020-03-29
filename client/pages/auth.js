import { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import AUTH_USER from "graphQL/auth";
// containers
import AuthContainer from "components/containers/auth/";

const Auth = () => {
  return <AuthContainer />;
};

export default Auth;
