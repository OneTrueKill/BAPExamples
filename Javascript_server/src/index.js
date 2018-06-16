/**
 * Created by Shan on 5/28/2018.
 */

const express = require("express");
const bodyParser = require("body-parser")
const db = require("./database/db");


const app = express();
const port =  process.env.PORT || 3000;

var Ajv = require("ajv")
var ajv = new Ajv()
const jobSchema = require("./JSON-schema/jobSchema.json")
const jobCatSchema = require("./JSON-schema/jobSchema.json")


const joi = require("joi")
const joiSchema = require("./JOI-schema/jobSchema")

app.use(bodyParser.json())
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', (req, res) =>{
  res.json({
    message: "Hello world"
  })
})

app.get("/jobs/", (req, res) =>{
  db.connection.models.job.findAll({}).then( result => {res.json(result)})
})


app.get("/jobs/cats", (req, res) =>{
  db.connection.models.job.findAll({
    include: [{
      model: db.cat
    }]
  }).then(result =>  {
    console.log(ajv.validate(jobCatSchema, result))
    res.json(result)
  })
})


/*** JSON schema
app.get("/jobs/:id", (req, res) =>{
  let id = parseInt(req.params.id)
  db.connection.models.job.findById(id).then(result => {

    console.log(ajv.validate(jobSchema, result.dataValues), ajv.errors)
    res.json(
    result
  )})
})
**/

app.get("/jobs/:id", (req, res) =>{
  let id = parseInt(req.params.id)
  db.connection.models.job.findById(id).then(result => {

    let valid = joi.validate(result.dataValues, joiSchema)
    console.log(valid.errors)
    res.json(
      result
    )})
})

app.get("/cats/", (req, res) =>{
  db.connection.models.categories.findAll({}).then( result => {res.json(result)})
})

app.get("/cats/:id", (req, res) =>{
  let id = parseInt(req.params.id)
  db.connection.models.categories.findById(id).then(result => res.json(result))
})


/** JSON SCHEMA
app.post('/addJob', (req,res) =>{
  let data = req.body;
  let valid = ajv.validate(jobSchema, data);
  if(valid){
    res.status(200)
    addToDatabase(body)
  }
  else {
    res.status(400)
  }
})
**/


//JOI

app.post('/addJob', (req,res) =>{
  let data = req.body;
  let result = joi.validate(data, joiSchema)
  console.log(result.error)
  if(!result.error){
    res.status(200)
    addToDatabase(body)
  }
  else {
    res.status(400)
  }
})


app.listen(port, () =>{
  console.log(`Listening on port ${port}`)
})




