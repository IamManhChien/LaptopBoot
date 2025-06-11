import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres', 'postgres', 'Abc123456', {
  host: 'localhost',
  dialect: 'postgres'
});

export default sequelize;
