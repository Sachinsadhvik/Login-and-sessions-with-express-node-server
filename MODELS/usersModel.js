const Schema = require('mongoose').Schema;
//const ObjectId = Schema.ObjectId;
const db1 = require('../DB/db')
const usersSchema = new Schema({
  email: String,
  password: String,
}); 

const UsersModel = db1.model('users',usersSchema);
module.exports = UsersModel;