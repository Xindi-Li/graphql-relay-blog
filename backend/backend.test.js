const { graphql, GraphQLSchema } = require('graphql');
const Query = require('./src/types/Query');
const Mutaion = require('./src/types/Mutaion');

const schema = new GraphQLSchema({
    query: Query,
    mutation: Mutaion,
});

describe('Check Authentication', () => {
    it('should test create user', async () => {
        const mutation = `
            mutation CreateUser{
                createUser(input:{fullname:"abc", username: "abc", password: "abc"}){
                    message
                }
            }
        `;
        const result = await graphql(schema, mutation);
        const { data } = result;
        expect(data.createUser.message).toBe('Success');
    });
});
