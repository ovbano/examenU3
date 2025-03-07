const express = require('express');
const BookingService = require('./../../services/servicesExamen/bookings.service');
const validatorHandler = require('./../../middlewares/validator.handler');
const {
  createBookingSchema,
  updateBookingSchema,
  getBookingSchema,
} = require('./../../schemas/schemasExamen/bookings.schema');

const router = express.Router();
const service = new BookingService();

// Obtener todas las reservas
router.get('/', async (req, res, next) => {
  try {
    const bookings = await service.find();
    res.json(bookings);
  } catch (error) {
    next(error);
  }
});

// Obtener una reserva por ID
router.get(
  '/:id',
  validatorHandler(getBookingSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const booking = await service.findOne(id);
      res.json(booking);
    } catch (error) {
      next(error);
    }
  },
);

// Crear una nueva reserva
router.post(
  '/',
  validatorHandler(createBookingSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newBooking = await service.create(body);
      res.status(201).json(newBooking);
    } catch (error) {
      next(error);
    }
  },
);

// Actualizar una reserva
router.patch(
  '/:id',
  validatorHandler(getBookingSchema, 'params'),
  validatorHandler(updateBookingSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const booking = await service.update(id, body);
      res.json(booking);
    } catch (error) {
      next(error);
    }
  },
);

// Eliminar una reserva
router.delete(
  '/:id',
  validatorHandler(getBookingSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  },
);

module.exports = router;
