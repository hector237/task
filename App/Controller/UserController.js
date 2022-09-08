//Importations

const { response,request } = require("express");

getUser = (req, res = response) => {
    res.send('Get User')
}
getUsers = (req = request, res = response) => {
    
    
    
    res.send('Get USers')
}
createUser = (req = request, res = response) => {
    const data = req.body;
    
    res.json({
        data
    })
}
updateUser = (req = request, res = response) => {
    res.send('Update User')
}
deleteUser = (req = request, res = response) => {
    res.send('Delete User')
}

module.exports = {
    getUser,
    getUsers,
    updateUser,
    deleteUser,
    createUser
};

