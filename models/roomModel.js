import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
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

const room = mongoose.model('Room', roomSchema);

export default room; //on exporte le modèle Room
