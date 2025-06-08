import { DataTypes } from 'sequelize';
import sequelize from './db.js';

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    unique: true,
    primaryKey: true
  },
  password: {
    type: DataTypes.STRING,
    unique: false
  }
});

export default User;
