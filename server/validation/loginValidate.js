const joi = require('joi');

const loginValidate = (dataObj) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
  });

  return schema.validateAsync(dataObj, { abortEarly: false });
};

module.exports = loginValidate;
