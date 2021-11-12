import passport from 'passport';
import { Strategy } from 'passport-local';

import userModel from '../models/userModel.js';

passport.use(
	'/signup',
	new Strategy(
		{
			usernameField: 'email',
			passwordField: 'password',
		},
		async (email, password, done) => {
			//done = next mais pour passport
			try {
				const user = await userModel.create({ email, password });

				return done(null, user); //
			} catch (error) {
				done(error);
			}
		}
	)
);

export default passport;
