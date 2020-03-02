const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID
} = require("graphql");

const { globalIdField, connectionDefinitions } = require("graphql-relay");
const { nodeInterface } = require("../interface/Node");
const { User } = require("./User");
const PostModel = require("../model/Post");

const Post = new GraphQLObjectType({
  name: "Post",
  description: "Post type definition",
  interfaces: [nodeInterface],
  fields: {
    id: globalIdField(),
    title: {
      type: GraphQLString,
      description: "Title",
      resolve: post => post.title
    },
    content: {
      type: GraphQLString,
      description: "Content",
      resolve: post => post.content
    },
    author: {
      type: User,
      description: "Author",
      resolve: post => PostModel.getPostAuthor(post.id)
    }
  }
});

const { connectionType: PostConnection } = connectionDefinitions({
  nodeType: Post
});

module.exports = { Post, PostConnection };
