import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres', 'postgres', '123456', {
  host: 'localhost',
  dialect: 'postgres'
});

export default sequelize;
