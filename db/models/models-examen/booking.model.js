const { Model, DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const { EVENT_TABLE } = require('./event.model'); // Importamos la tabla de eventos

const BOOKING_TABLE = 'bookings';

const BookingSchema = {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(),
    primaryKey: true,
    allowNull: false,
  },
  event_id: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'event_id',
    references: {
      model: EVENT_TABLE, // Referencia a la tabla de eventos
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  user_email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    field: 'user_email',
  },
  num_tickets: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'num_tickets',
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
};

class Booking extends Model {
  static associate(models) {
    this.belongsTo(models.Event, {
      as: 'event',
      foreignKey: 'event_id',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: BOOKING_TABLE,
      modelName: 'Booking',
      timestamps: false,
    };
  }
}

module.exports = { BOOKING_TABLE, Booking, BookingSchema };
