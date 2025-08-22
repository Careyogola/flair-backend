import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_PASSWORD,
    process.env.DATABASE_USER,
    {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
    logging: false,
  }

);

export default sequelize;