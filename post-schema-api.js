const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = graphql // desctructure the  obj  we need   from grphql
//const axios = require('axios')
const fetch = require("node-fetch");

const PostType = new GraphQLObjectType({
    name: 'Post',
    description: 'This is my post type',
    fields: {
        id: {
            type: GraphQLInt
        },
        title: {
            type: GraphQLString
        },
        body: {
            type: GraphQLString
        }
    }
})


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        posts: {
            type: new GraphQLList(PostType),
            args: {},
            async resolve(parentValue, args) {
                try {
                    
                    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                    const posts = await response.json();
                    console.log(posts)
                    return posts
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})