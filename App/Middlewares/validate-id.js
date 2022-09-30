//User's Model
const User = require('../Models/User');


const existID = async (id = "") => {

    const exist_ID = await User.findOne({id});

    if (!exist_ID) {
        throw new Error (`The ID ${id} doesn't exist in DATABASE`)
    }

}

module.exports = {
    existID
}