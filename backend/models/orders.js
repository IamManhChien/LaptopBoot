import { DataTypes } from 'sequelize';
import sequelize from './db.js';
const Order =  sequelize.define('orders', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userid: {
      type: DataTypes.TEXT,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'username'
      }
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_price: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    payment_method: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    payment_status: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    shipping_address: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'orders',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "orders_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
export default Order;
