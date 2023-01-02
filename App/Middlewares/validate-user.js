const { validationResult } = require('express-validator');

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors)
    }

    next();

}

/**
 * 
 * @param {*} email 
 * Confirm if exists the email in DB
 */
const existEmail = async (email = "") => {

    const exist_Email = await User.findOne({email});

    if (exist_Email) {
        throw new Error (`The role ${email} exist in DATABASE`)
    }

}

/**
 * 
 * @param {*} id 
 * Confirm if exist the user ID
 */

const existUserID = async (id = "") => {

    const exist_ID = await User.findOne({id});

    if (!exist_ID) {
        throw new Error (`The ID ${id} doesn't exist in DATABASE`)
    }

}

module.exports ={
    validate,
    existEmail,
    existUserID,
}