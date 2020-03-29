import Router from 'next/router';
// styles
import AUTH_USER from "graphQL/auth";

import styled from "styled-components";
// graphQL
import { useMutation } from "@apollo/react-hooks";

// components
import { useState } from "react";

import AuthForm from "./AuthForm";

const AuthContainer = () => {

  const [handleAuth,{data:userData}] = useMutation(AUTH_USER);
  const authUser = async ({username,password},callback)=>{
      try{
          await handleAuth({ variables: { username, password } });
          Router.push("/")
      }catch (e) {
          console.log(e);
          callback();
      }
  }

  return (
    <FormContainer>
      <AuthForm authUser={authUser}/>
    </FormContainer>
  );
};

// local styles
const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  transform: translateY(-50%);
`;

export default AuthContainer;
