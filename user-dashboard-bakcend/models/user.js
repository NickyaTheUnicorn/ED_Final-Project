//#region Basic Requirements
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
//#endregion

//#region User Schema definition
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
});

// This "routine" is called before saving the user in the database
userSchema.pre('save', function encryptPassword(next) {
    const user = this;

    if(!user.isModified('password')) return next();
    bcrypt.genSalt(10, (err, salt) => {
        // Check for errors
        if (err) return next(err);

        // Hash the password using the generated salt
        bcrypt.hash(user.password, salt, (hashErr, hash) => {
            // Check for errors during hasing
            if(hashErr) return next(hashErr);

            // Override the user password with the hashe one
            user.password = hash;
            next();
        });
    });
});
//#endregion


//#region User methods

userSchema.methods.compatePassword = function comparePassword(password) {
    return bcrypt.compareSync(password, this.password);
}

userSchema.methods.generateJWT = function() {
    const todayDate = new Date();
    const expirationDate = new Date(todayDate);
    expirationDate.setDate(todayDate.getDate() + 10);

    let payload = {
        id: this._id,
        email: this.email,
    };
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: parseInt(expirationDate.getTime() /1000, 10)
    });
}

//#endregion

module.exports = mongoose.model('User', userSchema)
