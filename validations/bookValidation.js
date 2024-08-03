const Joi = require('joi');

const bookValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().min(1).required(),
    author: Joi.string().min(1).required(),
    description: Joi.string().allow(''),
    genre: Joi.string().allow(''),
    publishedYear: Joi.number().integer().min(1000).max(new Date().getFullYear()).required(),
  });
  return schema.validate(data);
};

module.exports = { bookValidation };
