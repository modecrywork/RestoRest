import gql from "graphql-tag";

const AUTH = gql`
  mutation($username: String!, $password: String!) {
    signIn(username: $username, password: $password) {
      user {
        username
      }
    }
  }
`;

export default AUTH;
