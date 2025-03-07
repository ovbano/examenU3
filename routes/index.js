const express = require('express');

// rutas examen
const eventRouter = require('./routesExamen/events.route');
const bookingRouter = require('./routesExamen/bookings.route');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);

  // rutas examen
  router.use('/events', eventRouter);
  router.use('/bookings', bookingRouter);

}

module.exports = routerApi;
