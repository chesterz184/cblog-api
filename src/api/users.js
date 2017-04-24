import resource from 'resource-router-middleware';
import user from '../models/users';

export default ({ config, db }) => resource({

	/** Property name to store preloaded entity on `request`. */
	id : 'user',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */

	index( {params}, res) {
		user.find((err, users) => {
			if(err) {
				res.send(err);
			}
			res.json(users);
		})
	},
	
	read( {param}, res) {
		user.findOne({password : param}, (err, user) => {
			console.log(param);
			if(err) {
				res.send(err);
			}
			res.json(user);
		})
	}

});
