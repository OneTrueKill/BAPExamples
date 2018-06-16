/**
 * Created by Shan on 5/28/2018.
 */

const express = require("express");
const bodyParser = require("body-parser")
const db = require("./db/jobs.json")

const app = express();
const port =  process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', (req, res, next) =>{
  res.json({
    message: "Hello world"
  })
})

app.get("/jobs/", (req, res, next) =>{
  res.send(db)
})

app.get("/jobs/:id", (req, res, next) =>{
  let id = parseInt(req.params.id)
  let job = db.find(j => j.id = id )
  res.send(job)
})


app.listen(port, () =>{
  console.log(`Listening on port ${port}`)
})




