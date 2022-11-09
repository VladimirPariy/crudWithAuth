import {UsersDbModel} from "../../DB/models/users.dbmodel";import bcrypt from "bcryptjs";import jwt from "jsonwebtoken";import {secret} from "../secret";class AuthService {	async getUserByNameOrEmail(login = '', email = '') {		return UsersDbModel.query()			.where({login})			.orWhere({email});	}		async registration(login: string, email: string, password: string) {		const encryptedPass = bcrypt.hashSync(password, 7);		return UsersDbModel.query()			.insert({login, email, password: encryptedPass});	}		async getToken(_id: string) {		return jwt.sign({_id}, secret, {expiresIn: "2h"})	}}export default new AuthService();