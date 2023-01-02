const { response, request } = require("express");

const bcryptjs = require("bcryptjs");

//Models
const User = require("../Models/User");
const { generateJWT } = require("../Middlewares/generate-jwt");

login = async (req, res = response) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        //verifiying if the email exist
        if (!user) {
            return res.json({
                msg: " email dosen't exist in the database "
            });
        }
        //verifiying if the user has a true status
        if (!user.isActive) {
            return res.json({
                msg: " user status dosen't exist in the database "
            });
        }
        //verifiying if the password is equal
        const validPassword = bcryptjs.compareSync(password, user.password);
        if (!validPassword) {
            return res.json({
                msg: " the provided user password dosen't exist in the database "
            });
        }
        //generates the JWT
        jwt = await generateJWT(user.id);
        return res.json({
            msg: " Login ",
            user,
            jwt
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: ' you have given incorrect information '
        });
    }
}

module.exports = {
    login,
}