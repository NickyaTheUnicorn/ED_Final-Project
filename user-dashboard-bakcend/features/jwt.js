//#region Basic Requirements

const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJWT;

const User = require('../models/user');

//#endregion

//#region JWT Options Configuration

const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderasBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
};

//#endregion

//#region Module Exports

module.exports = passport => {
    passport.use(
        new JWTStrategy(opts, (jwt_payload, done) => {
            User.findById(jwt_payload.id)
                .then(user => {
                    // Check User in promise
                    if (user) {
                        return done(null, user);
                    }
                    // If there is no user, return false
                    return done(null, false);
                })
                .catch(err => {
                    // If there is any error, return the error and a message
                    return done(err, false, {message: 'Server Error'});
                });
        })
    );
};

//#endregion
