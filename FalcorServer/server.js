/**
 * Created by Shan on 6/2/2018.
 */

const express = require('express')
const app = express()

const falcor = require('falcor')
const falcorExpress = require('falcor-express')

const port = 9090

const $ref = falcor.Model.ref


const model  = new falcor.Model({
  cache: {
    jobList: {
      1: {
        jobName: 'cook',
        date: '2018-05-09',
        workhours: 8,
        pay: 11,
        infoWorkerOnly: 'Bring your own hat!'
      },
      2: {
        jobName: 'bartender',
        date: '2018-05-09',
        workhours: 10,
        pay: 8,
        infoWorkerOnly: 'Always say hello!'
      }
    },
    categories: [
      {
        catName: 'dringend',
        catDescription: 'Need someone fast!',
        jobs: [
          $ref('jobList[1]')
        ]
      },
      {
        catName: 'new',
        catDescription: 'New job!',
        jobs: [
          $ref('jobList[1]')
        ]
      }
    ]
  }
})

app.use('/model.json', falcorExpress.dataSourceRoute((req, res) => {
  return model.asDataSource()

}))


app.use(express.static('.'))



app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

