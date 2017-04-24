import mongoose from '../db.js';

var Schema = mongoose.Schema;

var User = new Schema({
	name : {
		type: 'String',
		required : true,
		unique : true
	},
	password : {
		type: 'String',
		required : true
	},
	gender : {
		type: 'String',
		enum : ['f', 'm', 'x']
	},
	admin : {
		type: 'Boolean',
		required : true
	},
	avatar : {
		type: 'String'
	},
	bio : {
		type: 'String'
	},
})

var UserModel = mongoose.model('User', User);

export default UserModel;

