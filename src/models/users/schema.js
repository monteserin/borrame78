import { db } from '../../application/database';
const { DataTypes } = require('sequelize');

const User = db.define('user', {
	username: DataTypes.STRING,
	password: DataTypes.STRING,
	mail: DataTypes.STRING,
});

export default User;