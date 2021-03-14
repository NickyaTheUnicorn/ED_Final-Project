//#region Basic Requirements

const User = require('../models/user');

//#endregion

//#region Exported Controllers Methods

exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({ email });

        // Check if user actually exists
        if (!user) {
            return res.status(401).json({message: `The email address ${email} is not associeted with any account. Please check your email adderss and try again.`});
        }

        // Check password
        if (!user.comparePassword(password)) {
            return res.status(401).json({message: 'Invalid email or password'});
        }

        // Authenticate and create token
        res.status(200).json(user.generateJWT());
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

exports.register = async (req, res) => {
    try {
        const { email } = req.body;
        
        // Check if the inserted email is already in use
        const returnedUser = await User.findOne({ email });
        if (user) {
            return res.status(401).json({message: `The email address ${email} is already associeted with another account. Please use another email address or Login`});
        }

        const newUser = new User({ ...req.body });
        const user_ = await newUser.save();

        res.status(200).send(user_);
    } catch (error) {
        console.error(`Error Message: ${error}`);
        res.status(500).json({success: false, message: error.message});
    }
}

//#endregion
