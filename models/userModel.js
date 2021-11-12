import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});

//pre hook
userSchema.pre('save', async function (next) {
	//means : avant de save, fait cette fonction
	const user = this;
	const hash = await bcrypt.hash(user.password, 10);

	user.password = hash;

	next();
});

//Ajouter une méthode pour vérifier le password
userSchema.methode.isValidPassword = async function (password) {
	//methode means : ajouter une méthode (valide password)
	const user = this;
	const isMatch = await bcrypt.compare(password, user.password);

	return isMatch;
};

const userModel = mongoose.model('User', userSchema);

export default userModel;
