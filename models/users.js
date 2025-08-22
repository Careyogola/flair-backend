import { DataTypes  } from "sequelize";
import sequelize from "../database/database.js";

const User = sequelize.define('User',{
    id:{
        type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    },
     name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING(150),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },

  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },

  age: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  bio: {
    type: DataTypes.TEXT,
    allowNull: true,
  },

  gender: {
    type: DataTypes.ENUM('male', 'female', 'other'),
    defaultValue: 'male',
  },

  interested_in: {
    type: DataTypes.ENUM('male', 'female', 'both'),
    defaultValue: 'male',
  },

  location: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },

  profile_image: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
}, {
  tableName: 'users', 
  timestamps: true,
});

export default User;