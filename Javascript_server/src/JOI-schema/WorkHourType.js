/**
 * Created by Shan on 5/30/2018.
 */

const Joi = require("JOI")

const WorkHoursJobType = Joi.number().required().max(10);



module.exports = WorkHoursJobType;
