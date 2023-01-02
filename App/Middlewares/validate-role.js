const { response } = require("express");
const Role = require("../Models/Role");


const existRole = async( role_name = '') => {
    const exist_Role = await Role.findOne({role_name});
    if( !exist_Role ){
        throw new Error (`The role ${role} doesn't exist in DATABASE`)
    }
}

const isAdmin = async(req, res = response, next) => {

    if (!req.Logued_user) {
        return res.status(500).json({
            error: 'Validate role first'
        });
        
    }

    const {role,name} = req.Logued_user;

    if (role !== 'ADMIND_ROLE') {
        return res.status(401).json({
            error: `${name} is not an admin`
        })
    }
    next();


}

const hasRole = (...roles) => {
    return (req, res = response, next) => {
        if (!req.Logued_user) {
            return res.status(500).json({
                error: 'Validate role first'
            });
        }
        if ( !roles.includes(req.Logued_user.role)) {
            return res.status(401).json({
                error: `${req.Logued_user.name} is not authorized `
            })
        }
        next();
    
    }
}
module.exports = {
    existRole,
    isAdmin,
    hasRole
}