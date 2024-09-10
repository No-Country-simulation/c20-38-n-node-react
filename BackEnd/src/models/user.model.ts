import { DataTypes } from 'sequelize'
import InnativeDB from '../config/database'
import { Gender } from './gender.model'

export const User = InnativeDB.define('user', {
  id_user: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_login: {
    type: DataTypes.DATE,
    allowNull: true
  },
  dt_birthdate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM,
    values: ['admin', 'client'],
    allowNull: false,
    defaultValue: 'client'
  },
  id_gender: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Gender,
      key: 'id_gender'
    }
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: true
  }
})
