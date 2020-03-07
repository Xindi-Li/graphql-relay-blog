import { commitMutation, graphql } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';
import environment from '../Environment';

const mutation = graphql`
    mutation CreateUserMutation(
        $createUserInput: CreateUserInput!
        $loginUserInput: LoginUserInput!
    ) {
        createUser(input: $createUserInput) {
            message
        }
        loginUser(input: $loginUserInput) {
            user {
                id
                username
                password
                fullname
            }
        }
    }
`;

export default (username, password, fullname, callback) => {
    const variables = {
        createUserInput: {
            username,
            password,
            fullname,
            clientMutationId: '',
        },
        loginUserInput: {
            username,
            password,
            clientMutationId: '',
        },
    };

    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: resp => {
            callback(resp.loginUser.user);
        },
        onError: err => console.log(err),
    });
};
