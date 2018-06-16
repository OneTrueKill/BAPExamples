/**
 * Created by Shan on 5/29/2018.
 */

const Joi = require('joi')
const workHourType = require("./WorkHourType")


module.exports = Joi.object().keys({
  id: Joi.number().required(),
  jobname: Joi.string().required(),
  date: Joi.date().required(),
  workhours: workHourType,
  pay: Joi.number().required(),
  infoWorkerOnly: Joi.string().required(),
})