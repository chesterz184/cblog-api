import mongoose from 'mongoose';
import config from './config.json';


mongoose.connect(config.db);

var Schema = mongoose.Schema;

var User = new Schema({
	name : String,
	password : String,
	gender : String,
	admin : Boolean,
	avatar : String,
	bio : String
})

export default callback => {
	// connect to a database if needed, then pass it to `callback`:
	callback(mongoose);
}
