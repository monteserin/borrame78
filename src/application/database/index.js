import { Sequelize } from 'sequelize';
import dbConfig from '../../database';

const { database, user, password, host, forceCleanDatabase } = dbConfig;

export const db = new Sequelize(database, user, password, {
	host,
	dialect: 'mysql',
	query: { raw: true }
});

export default async (onConnect) => {
	try {
		await db.authenticate();
		db.sync({ force: forceCleanDatabase });
		onConnect();
		console.log('Database connection OK!');
	} catch (error) {
		console.log('Unable to connect to the database:');
	}
}