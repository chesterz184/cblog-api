import { version } from '../../package.json';
import { Router } from 'express';
// import facets from './facets';
// import users from './users';
import User from '../models/users'

export default ({ config, db }) => {
	let api = Router();

	// mount the facets resource
	// api.use('/facets', facets({ config, db }));

	// api.use('/users', users({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	api.get('/user/:id', (req, res) => {
		User.findById(req.params.id, function(err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
	})

	return api;
}
