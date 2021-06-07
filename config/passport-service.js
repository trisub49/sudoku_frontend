const passport = require('passport');
const keys = require('./keys');

const GoogleStrategy = require('passport-google-oauth20');
const User = require('../models/user-model');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id)
		.then(user => {
			done(null, user);
		});
});

passport.use(
	new GoogleStrategy({
		clientID: keys.google.clientID,
		clientSecret: keys.google.clientSecret,
		callbackURL: '/auth/google/redirect'
	}, 
	(accessToken, refreshToken, profile, done) => {
		User.findOne({googleId: profile.id})
		.then(user => {
			if(user) {
				done(null, user);
			} else {
				new User({ username: profile.displayName, googleId: profile.id, image: profile.photos[0].value})
				.save()
				.then(newUser => {
					console.log(newUser)
					done(null, newUser);
				});
			}
		})
	}));