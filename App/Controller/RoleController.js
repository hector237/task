const Role = require("../Models/Role");

getRole = (req, res = response) => {
    res.send('Get Role')
}
getRoles = async (req = request, res = response) => {

    const roles = await Role.find();
    res.json({
        roles
    })
}
createRole =  async(req = request, res = response) => {
    const { role_name, description } = req.body;
    const role = new Role ({ role_name, description });

    //save the role   
   await role.save();

    res.json({
        role
    })
}
updateRole = (req = request, res = response) => {
    res.json({
        message: 'Update Role'
    });
}
deleteRole = (req = request, res = response) => {
    res.json({
        message: 'Delete Role'
    });
}

module.exports = {
    getRole,
    getRoles,
    updateRole,
    deleteRole,
    createRole
};