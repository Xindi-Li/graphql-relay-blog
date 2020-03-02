const express = require("express");
const graphQLHTTP = require("express-graphql");
const { GraphQLSchema } = require("graphql");

const Query = require("./src/types/Query");
const Mutation = require("./src/types/Mutaion");

const schema = new GraphQLSchema({
    query: Query,
    mutation: Mutation
});

let app = express();
const cors = require('cors');
app.use(cors());
app.use(
    "/backend",
    graphQLHTTP({
        schema,
        graphiql:true
    })
);

app.listen(5000);