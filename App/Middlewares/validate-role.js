const Role = require("../Models/Role");


const existRole = async( role_name = '') => {
    const exist_Role = await Role.findOne({role_name});
    if( !exist_Role ){
        throw new Error (`The role ${role} doesn't exist in DATABASE`)
    }
}
module.exports = {
    existRole
}