//#region  Basic Requirements

const passport = require('passport');

//#endregion

//#region Module Exports

module.exports = (req, res, next) => {
    passport.authenticate('jwt', function(err, user, info) {
        // Check for errors
        if(err) {
            return next(err);
        }

        // Check User
        if (!user) {
            return res.status(401).json({message: 'Unauthorized Access - No Token Provided!'});
        }

        req.user = user;
        next();
    })(req, res, next);
};

//#endregion
