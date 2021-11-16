import express from 'express';
import passport from 'passport';
import {
	getTest,
	postTest,
	addRoom,
	getRooms,
	getRoom,
	updateRoom,
	deleteRoom,
} from '../controllers/roomControllers.js';
import { catchErrors } from '../helpers.js';

const router = express.Router();

router.get('/', (_, res) => {
	res.send('hello hardcoders');
});

router.get('/test', getTest); //route to get all rooms

router.post('/test', postTest); //route to post a room

router.post('/room', catchErrors(addRoom)); // route to add a room aui appelle la function catch error dans helpers

router.get('/rooms', catchErrors(getRooms));

router.get('/room/:id', catchErrors(getRoom)); // les : permet de recuperer l'id dans l'url

router.patch('/room/:id', catchErrors(updateRoom));

router.delete('/room/:id', catchErrors(deleteRoom));

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

router.get('/*', (_, res) => {
	res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

export default router;
