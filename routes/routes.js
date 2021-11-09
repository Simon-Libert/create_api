import express from 'express';
import { getTest, posTest } from '../controllers/roomControllers.js';
const router = express.Router();

router.get('/', (_, res) => {
	res.send('hello hardcoders');
});

router.get('/test', getTest); //route to get all rooms

router.post('/test', posTest); //route to post a room

export default router;
