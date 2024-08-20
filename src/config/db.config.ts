import mysql, { RowDataPacket } from 'mysql2/promise';

// Create a connection pool
export const pool = mysql.createPool({
	host: 'hclogistics-dev.c3qg4ws80c73.ap-south-1.rds.amazonaws.com', // Database host
	user: 'user1', // Database user
	password: 'password', // Database password
	database: 'hclogistics_dev', // Your database name
	waitForConnections: true, // Wait for connections to be available
	connectionLimit: 100, // Max number of connections in the pool
	queueLimit: 0, // Max number of connection requests to queue
});

// Add queryOne method to fetch a single result row
export const queryOne = async (query: string, params?: any[]): Promise<any> => {
	const [rows]: [RowDataPacket[], any] = await pool.query(query, params);
	return rows[0] || null; // Return the first row or null if no results
};
