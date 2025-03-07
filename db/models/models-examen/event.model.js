const { Model, DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

const EVENT_TABLE = 'events';

const EventSchema = {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(),
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
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

class Event extends Model {
  static associate(models) {
    this.hasMany(models.Booking, {
      as: 'bookings',
      foreignKey: 'event_id',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: EVENT_TABLE,
      modelName: 'Event',
      timestamps: false,
    };
  }
}

module.exports = { EVENT_TABLE, Event, EventSchema };
