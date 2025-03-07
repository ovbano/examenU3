const boom = require('boom');
const { models } = require('./../../libs/sequelize');

class BookingService {
  constructor() {}

  // Crear una nueva reserva
  async create(data) {
    const newBooking = await models.Booking.create(data);
    return newBooking;
  }

  // Obtener todas las reservas
  async find() {
    const bookings = await models.Booking.findAll({
      include: ['event'], // Incluir el evento asociado
    });
    return bookings;
  }

  // Obtener una reserva por ID
  async findOne(id) {
    const booking = await models.Booking.findByPk(id, {
      include: ['event'], // Incluir el evento asociado
    });
    if (!booking) {
      throw boom.notFound('Booking not found');
    }
    return booking;
  }

  // Actualizar una reserva
  async update(id, changes) {
    const booking = await this.findOne(id); // Reutiliza el método findOne
    const rta = await booking.update(changes);
    return rta;
  }

  // Eliminar una reserva
  async delete(id) {
    const booking = await this.findOne(id); // Reutiliza el método findOne
    await booking.destroy();
    return { id };
  }
}

module.exports = BookingService;
