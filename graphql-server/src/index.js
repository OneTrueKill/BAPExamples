/**
 * Created by Shan on 4/25/2018.
 */
const Express = require('express');
const GraphHttp = require('express-graphql');
const Schema = require('./schema/schema');



const PORT = 8080;

const app = Express()

app.use("/Graphql", GraphHttp({
  schema: Schema,
  pretty:true,
  graphiql: true
}))

app.listen(PORT, () =>{
  console.log(`Graphql app online on port ${PORT}`)
})
