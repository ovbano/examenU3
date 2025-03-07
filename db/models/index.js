const { Event, EventSchema } = require('./models-examen/event.model');
const { Booking, BookingSchema } = require('./models-examen/booking.model');


function initModels(sequelize) {
  Event.init(EventSchema, Event.config(sequelize));
  Booking.init(BookingSchema, Booking.config(sequelize));

  Event.associate(sequelize.models);
  Booking.associate(sequelize.models);

}

module.exports = initModels;
