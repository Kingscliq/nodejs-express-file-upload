const Joi = require("@hapi/joi");
const keys = {
  skip: Joi.number()
    .integer()
    .required(),
  limit: Joi.number()
    .integer()
    .required() // removed the allowed numbers
};

const schema = Joi.object().keys(keys);

module.exports = schema;
