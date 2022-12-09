const {response, request} = require('express');

const jwt = require('jsonwebtoken');
const User = require('../Models/User');


const generateJWT = (uid = '') => {

    return new Promise((resolve,reject) => {
        const playload = {uid};
        jwt.sign(playload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: "4h"
        }, (err, token) => {

            if (err) {
                console.log(err);
                reject('the token cannot be created')
            }else{
                resolve(token);
            }

        })
    })
}

const validateJWT = async (req = request, res = response, next) => {
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            msg: 'Token not valid'
        })
    }

    try {
        
       const {uid} = jwt.verify(token,process.env.SECRETORPRIVATEKEY);
       const user =await  User.findById(uid)
       if (!user) {
        return res.status(401).json({
            msg: 'token not valid'
        })
       }
       if (!user.isActive) {
        return res.status(401).json({
            msg: 'token not valid'
        })
       }
        req.Logued_user = user
        next();
        
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            msg: 'Token not valid'
        })
    }
}
module.exports = {
    generateJWT,
    validateJWT
}