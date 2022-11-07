import bcrypt from "bcryptjs";import {knexInstance} from "../../DB/knex.js";import {connection} from "../../DB/db.js";class UsersService {  async getAll() {    return knexInstance('users').select('*');  }  async getOneById(id) {    return knexInstance('users').where({_id: id});  }  async update(user) {    if (!user._id) throw new Error('No id');    if (user.password) user.password = await bcrypt.hashSync(user.password, 7);    const {_id: userID, ...reqBodyWithoutID} = user    return knexInstance('users').where('_id', "=", userID).update(reqBodyWithoutID)  }  async deleteAll() {    return knexInstance('users').del();  }  async deleteOne(id) {    return knexInstance('users').where({_id: id}).del();  }}export default new UsersService();