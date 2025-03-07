const express = require('express');
const EventService = require('./../../services/servicesExamen/events.service');
const validatorHandler = require('./../../middlewares/validator.handler');
const {
  createEventSchema,
  updateEventSchema,
  getEventSchema,
} = require('./../../schemas/schemasExamen/events.schema');

const router = express.Router();
const service = new EventService();

// Obtener todos los eventos
router.get('/', async (req, res, next) => {
  try {
    const events = await service.find();
    res.json(events);
  } catch (error) {
    next(error);
  }
});

// Obtener un evento por ID
router.get(
  '/:id',
  validatorHandler(getEventSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const event = await service.findOne(id);
      res.json(event);
    } catch (error) {
      next(error);
    }
  },
);

// Crear un nuevo evento
router.post(
  '/',
  validatorHandler(createEventSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newEvent = await service.create(body);
      res.status(201).json(newEvent);
    } catch (error) {
      next(error);
    }
  },
);

// Actualizar un evento
router.patch(
  '/:id',
  validatorHandler(getEventSchema, 'params'),
  validatorHandler(updateEventSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const event = await service.update(id, body);
      res.json(event);
    } catch (error) {
      next(error);
    }
  },
);

// Eliminar un evento
router.delete(
  '/:id',
  validatorHandler(getEventSchema, 'params'),
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
