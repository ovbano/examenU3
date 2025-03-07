const Joi = require('joi');
const { v4: uuidv4 } = require('uuid');

const id = Joi.string().uuid();
const eventId = Joi.string().uuid();
const userEmail = Joi.string().email();
const numTickets = Joi.number().integer().min(1);

const createBookingSchema = Joi.object({
  event_id: eventId.required(), // Usar snake_case
  user_email: userEmail.required(), // Usar snake_case
  num_tickets: numTickets.required(), // Usar snake_case
});

const updateBookingSchema = Joi.object({
  eventId: eventId,
  userEmail: userEmail,
  numTickets: numTickets,
});

const getBookingSchema = Joi.object({
  id: id.required(),
});

module.exports = { createBookingSchema, updateBookingSchema, getBookingSchema };
