//#region Basic Requirements

const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models/user');

//#endregion

//#region JWT Options Configuration

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
};

//#endregion

//#region Module Exports

module.exports = passport => {
    passport.use(
        new JwtStrategy(opts, (jwt_payload, done) => {
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
