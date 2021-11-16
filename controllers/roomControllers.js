// controllers sont les fonctions qui vont permttre de faire des choses dans l'api, comme récupérer kles chambres...

import roomModel from '../models/roomModel.js';

export const getTest = (_, res) => {
	res.send({ name: 'hardcoders' });
};

export const postTest = (req, res) => {
	res.send(req.body);
};

//create
export const addRoom = async (req, res) => {
	const room = new roomModel(req.body);
	await room.save();
	res.send(room);
};

// read all rooms
export const getRooms = async (req, res) => {
	const rooms = await roomModel.find({});
	res.send(rooms);
};

// read one room
export const getRoom = async (req, res) => {
	const room = await roomModel.find({ _id: req.params.id });
	res.send(room);
};

// update room
export const updateRoom = async (req, res) => {
	const room = await roomModel.findByIdAndUpdate(req.params.id, req.body);
	await room.save();
	res.send(room);
};

// delete room
export const deleteRoom = async (req, res) => {
	const room = await roomModel.findByIdAndDelete(req.params.id);
	if (!room) {
		res.status(404).send('room not found');
	}
	res.status(200).send();
};
