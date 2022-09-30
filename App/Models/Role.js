const { Schema, model } = require('mongoose');


const RoleSchema = Schema({
    role_name:{
        type: "String",
        required: [true, 'The role name is required']
    },
    description:{
        type: 'String',
        default: 'No description added'
    }
})

module.exports = model('Role', RoleSchema)