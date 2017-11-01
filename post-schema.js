const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = graphql // desctructure the  obj  we need   from grphql



const PostType = new GraphQLObjectType({
    name: 'Post',
    description: 'This is my post type',
    fields: {
      id: { type: GraphQLInt },
      title: { type: GraphQLString },
      body: { type: GraphQLString }
  }
})


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        posts: {
            type: new GraphQLList(PostType),
            args: {},
            resolve(parentValue, args) {
                return [{
                    id: 1,
                    title: 'Test post 01',
                    body: 'Lorem ipsum dolor sit amet'
                }, {
                    id: 2,
                    title: 'Test post 02',
                    body: 'Lorem ipsum dolor sit amet'
                }, {
                    id: 3,
                    title: 'Test post 03',
                    body: 'Lorem ipsum dolor sit amet'
                }]
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})