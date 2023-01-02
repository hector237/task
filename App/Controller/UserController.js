//Importations
const { response, request } = require("express");

//Models
const User = require('../Models/User');

//Utilities
const bcryptjs = require('bcryptjs');


getUser = async (req, res = response) => {
    res.send('Get User')
}
getUsers = async (req = request, res = response) => {
    const{limit = 5, skip = 0} = req.query;
    
    const [total, user] = await Promise.all([
       User.countDocuments({isActive: true}),
       User.find({isActive: true})
        .skip(Number(skip))
        .limit(Number(limit)),

    ])
    res.json({
        Pagination :{
            total,
            limit,
            skip
        },
        user

    })
}
createUser =  async(req = request, res = response) => {
    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });

    //encrypt the pass
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    //save the user   
    await user.save();

    res.json({
        user
    })
}
updateUser = async (req = request, res = response) => {
    const {id} = req.params;
    const { _id, email, password, role, googleSingIn, ...update } = req.body;

    //encrypt the pass
    if (password) {
        const salt = bcryptjs.genSaltSync();
        update.password = bcryptjs.hashSync(password, salt);
    }
    
    const user = await User.findByIdAndUpdate(id,update,{returnDocument:'after'})
    console.log(user);
    res.json({
        user
    });
}
deleteUser = async (req = request, res = response) => {
    const {id} = req.params;

    const user = await User.findByIdAndUpdate(id,{isActive : false},{returnDocument:'after'})
   const userLogueado = req.userLogueado;
    res.json({
        user,
        userLogueado
    });
}

module.exports = {
    getUser,
    getUsers,
    updateUser,
    deleteUser,
    createUser
};

