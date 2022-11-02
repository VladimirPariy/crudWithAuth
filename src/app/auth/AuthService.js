import {connection} from "../db.js";class AuthService {	async getUserByNameOrEmail(name, email) {		const user = await connection.query('SELECT * FROM users WHERE name=? OR email=?', [name, email]);		return user[0]	}	async registration(name, email, hashPass) {		return await connection.query(`INSERT INTO users.users (name, email, pass) VALUES (?,?,?)`, [name, email, hashPass])	}}export default new AuthService();