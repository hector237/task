//Importations

const { response,request } = require("express");

getTask = (req, res = response) => {
    res.send('Get Task')
}
getTasks = (req = request, res = response) => {
    
    
    
    res.send('Get Tasks')
}
createTask = (req = request, res = response) => {
    const data = req.body;
    
    res.json({
        data
    })
}
updateTask = (req = request, res = response) => {
    res.send('Update Task')
}
deleteTask = (req = request, res = response) => {
    res.send('Delete Task')
}

module.exports = {
    getTask,
    getTasks,
    updateTask,
    deleteTask,
    createTask
};

