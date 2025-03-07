const boom = require('boom');
const { models } = require('./../../libs/sequelize');

class EventService {
  constructor() {}

  // Crear un nuevo evento
  async create(data) {
    const newEvent = await models.Event.create(data);
    return newEvent;
  }

  // Obtener todos los eventos
  async find() {
    const events = await models.Event.findAll();
    return events;
  }

  // Obtener un evento por ID
  async findOne(id) {
    const event = await models.Event.findByPk(id, {
      include: ['bookings'], // Incluir las reservas asociadas
    });
    if (!event) {
      throw boom.notFound('Event not found');
    }
    return event;
  }

  // Actualizar un evento
  async update(id, changes) {
    const event = await this.findOne(id); // Reutiliza el método findOne
    const rta = await event.update(changes);
    return rta;
  }

  // Eliminar un evento
  async delete(id) {
    const event = await this.findOne(id); // Reutiliza el método findOne
    await event.destroy();
    return { id };
  }
}

module.exports = EventService;
