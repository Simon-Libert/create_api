import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true, // remove whitespace
		lowercase: true,
	},
	capacity: {
		type: Number,
		default: 1,
		required: true,
		validate: (value) => {
			if (value <= 0) {
				throw new Error('Capacity must be greater than 0');
			}
		},
	},
	price: {
		type: Number,
		required: true,
	},
});

const roomModel = mongoose.model('Room', roomSchema);

export default roomModel; //on exporte le modèle Room
