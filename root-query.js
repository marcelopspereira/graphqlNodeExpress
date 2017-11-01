const graphql = require('graphql')
const {
    GraphQlObjectType,
    GraphQLSchema,
} = graphql // desctructure the  obj  we need   from grphql


const RootQuery = new GraphQlObjectType({
    name: 'RootQueryType',
    fileds: {
        //this will be  filled  in a bit
    }
})


module.exports = GraphQLSchema({
    query: RootQuery
})