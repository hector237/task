//Importations

const { response,request } = require("express");

getUser = (req, res = response) => {
    res.send('Get Task')
}
getTUser = (req = request, res = response) => {
    
    
    
    res.send('Get Tasks')
}
createUser = (req = request, res = response) => {
    const data = req.body;
    
    res.json({
        data
    })
}
updateUser = (req = request, res = response) => {
    res.send('Update Task')
}
deleteUser = (req = request, res = response) => {
    res.send('Delete Task')
}

module.exports = {
    getUser,
    getUser,
    updateUser,
    deleteUser,
    createUser
};

