import gql from "graphql-tag";

const AUTH_USER = gql`
  mutation($username: String!, $password: String!) {
    signIn(username: $username, password: $password) {
      user {
        username
      }
    }
  }
`;

export default AUTH_USER;
