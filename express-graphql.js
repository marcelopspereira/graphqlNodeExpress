const express = require('express');
const expressGraphQL = require('express-graphql');


// creat on instance express
 const app = express()

 //Vonnection with GraphQL and Graphiql panel
 app.use('/graphql', expressGraphQL({
     graphiql:true
 }))
 
 app.listen(4000,()=>{
     console.log('Servidor Rodando')
 })