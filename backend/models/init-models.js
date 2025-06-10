import { DataTypes } from 'sequelize';
import _Users from './Users.js';
import _order_items from './order_items.js';
import _orders from './orders.js';
import _products from './products.js';

function initModels(sequelize) {
  const Users = _Users(sequelize, DataTypes);
  const order_items = _order_items(sequelize, DataTypes);
  const orders = _orders(sequelize, DataTypes);
  const products = _products(sequelize, DataTypes);

  orders.belongsTo(Users, { as: 'user', foreignKey: 'userid' });
  Users.hasMany(orders, { as: 'orders', foreignKey: 'userid' });

  order_items.belongsTo(orders, { as: 'order', foreignKey: 'order_id' });
  orders.hasMany(order_items, { as: 'order_items', foreignKey: 'order_id' });

  order_items.belongsTo(products, { as: 'product', foreignKey: 'product_id' });
  products.hasMany(order_items, { as: 'order_items', foreignKey: 'product_id' });

  return {
    Users,
    order_items,
    orders,
    products,
  };
}

export default initModels;
export { initModels };

