import { commitMutation, graphql } from "react-relay";
import { ConnectionHandler } from "relay-runtime";
import environment from "../Environment";

const mutation = graphql`
  mutation LoginUserMutation($input: LoginUserInput!) {
    loginUser(input: $input) {
      user {
        id
        username
        password
        fullname
      }
    }
  }
`;

export default (username, password, callback) => {
  const variables = {
    input: {
      username,
      password,
      clientMutationId: ""
    }
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: resp => {
      callback(resp.loginUser.user);
    },
    onError: err => console.log(err)
  });
};
