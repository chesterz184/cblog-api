import mongoose from 'mongoose';
import config from './config.json';


mongoose.connect(config.db);

export default mongoose;