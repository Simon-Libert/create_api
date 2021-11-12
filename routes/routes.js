import express from 'express';
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

export default router;
