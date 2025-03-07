const Joi = require('joi');
const { v4: uuidv4 } = require('uuid');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(100);
const description = Joi.string().min(10);
const date = Joi.date().iso();
const capacity = Joi.number().integer().min(1);

const createEventSchema = Joi.object({
  name: name.required(),
  description: description.required(),
  date: date.required(),
  capacity: capacity.required(),
});

const updateEventSchema = Joi.object({
  name: name,
  description: description,
  date: date,
  capacity: capacity,
});

const getEventSchema = Joi.object({
  id: id.required(),
});

module.exports = { createEventSchema, updateEventSchema, getEventSchema };
