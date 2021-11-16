import express from 'express';
import passport from 'passport';
import { catchErrors } from '../helpers.js';
import {
	getTest,
	postTest,
	addRoom,
	getRooms,
	getRoom,
	updateRoom,
	deleteRoom,
} from '../controllers/roomControllers.js';

// Path avec ES module , permet d'utiliser path avec node
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

router.get('/', (_, res) => {
	res.send('hello hardcoders');
});

router.get('/api/rooms', catchErrors(getRooms));

router.get('/api/rooms/:id', catchErrors(getRoom)); // les : permet de recuperer l'id dans l'url

router.post('/api/rooms', catchErrors(addRoom)); // route to add a room aui appelle la function catch error dans helpers

router.patch('/api/rooms/:id', catchErrors(updateRoom));

router.delete('/api/rooms/:id', catchErrors(deleteRoom));

// Authentification

router.post(
	'/signup',
	passport.authenticate('signup', { session: false }),
	async (req, res, next) => {
		res.json({
			message: 'Signup OK',
			user: req.user,
		});
	}
);

export default router;
