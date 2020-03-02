const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
} = require("graphql");

const { connectionArgs, connectionFromPromisedArray, fromGlobalId } = require("graphql-relay");
const { nodeField } = require("../interface/Node");
const { Post, PostConnection } = require("./Post");
const { User } = require('./User');
const UserModel = require('../model/User');
const PostModel = require("../model/Post");

const Viewer = new GraphQLObjectType({
    name: "Viewer",
    fields: {
        allPosts: {
            type: new GraphQLNonNull(PostConnection),
            args: { ...connectionArgs, order: { type: GraphQLString } },
            resolve: (_, args) =>
                connectionFromPromisedArray(
                    PostModel.getPosts(args.order),
                    args
                )
        },
        user: {
            type: User,
            args: {
                id: { type: GraphQLID },
                username: { type: GraphQLString }
            },
            resolve: (_, args) => {
                const { type, id } = fromGlobalId(args.id);
                if (type === 'User') {
                    return UserModel.getUser(id, args.username);
                } else {
                    return null;
                }
            }
        },
        id: {
            type: new GraphQLNonNull(GraphQLID),
            args: {},
            resolve: (_, args) => "viewer-fixed"
        }
    }
});

const Query = new GraphQLObjectType({
    name: "Query",
    description: "query for blog",
    fields: {
        node: nodeField,
        viewer: {
            name: "Viewer",
            description: "Viewer pattern implementation",
            type: new GraphQLNonNull(Viewer),
            resolve: (_, args) => {
                return {};
            }
        }

    }
});

module.exports = Query;