import { commitMutation, graphql } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';
import environment from '../Environment';

const mutation = graphql`
    mutation CreateUserMutation($input: CreateUserInput!) {
        createUser(input: $input) {
            user {
                id
            }
        }
    }
`;

export default (username, password, fullname, callback) => {
    const variables = {
        input: {
            username,
            password,
            fullname,
            clientMutationId: '',
        },
    };

    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: resp => {
            callback(resp.createUser.user);
        },
        onError: err => console.log(err),
    });
};
