//User's Model
const User = require('../Models/User');


const existEmail = async (email = "") => {

    const exist_Email = await User.findOne({email});

    if (exist_Email) {
        throw new Error (`The role ${email} exist in DATABASE`)
    }

}

module.exports = {
    existEmail
}