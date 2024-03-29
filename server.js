import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/routes.js';

import './auth/auth.js';

import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.use(routes);

app.listen(PORT, () => {
	console.log(`Server nodemon is listening on port ${PORT}`);
});
