//#region Basic Requirements

const User = require('../models/user');

//#endregion

//#region Exported Functions

exports.getUserInformations = async (req, res) => {
    try {
        const  id  = req.user._id;
        console.log(id);
        const user = await User.findById(id);
        console.log(user);

        if(!user) {
            return res.status(404).send({message: 'The requested user does not exist!'});
        }
        res.status(200).send(user);
    } catch(error) {
        res.status(500).send({message: error});
    }
}

//#endregion