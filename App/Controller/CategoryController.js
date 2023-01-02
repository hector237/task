//Importations
const { response,request } = require("express");

const Category = require("../Models/Category");

getCategory = async (req = request, res = response) => {
    const{id} = req.params;

    const category = await Category.findById(id,{status: true}).populate('user','name');
    
    res.status(200).json({
        category
    })
}
getCategories = async (req = request, res = response) => {
    const{limit = 5, skip = 0} = req.query;
    
    const [total, categories] = await Promise.all([
       Category.countDocuments({status: true}),
       Category.find({isActive: true})
        .skip(Number(skip))
        .limit(Number(limit))
        .populate('user','name'),

    ])
    res.json({
        Pagination :{
            total,
            limit,
            skip
        },
        categories

    })
}
createCategory = async (req = request, res = response) => {

   const cat_name = req.body.category_name.toUpperCase();
    
   //check if exist
   const categoryDB = await Category.findOne({category_name: cat_name});
   console.log(categoryDB);
    if (categoryDB) {
        return res.status(400).json({
            message: `the category ${categoryDB.category_name} already exist`
        });
    }

    //build the Category body with the information
    const data = {
        category_name: cat_name,
        description: req.body.description,
        status: true,
        user: req.Logued_user._id,
    };
    const category = new Category(data);

    //save in DB
    await category.save();
    res.json({
        category
    })
}
updateCategory = async (req = request, res = response) => {

    //Obtain the information
   const {id} = req.params;
   const {_id, estatus, user, ...update} = req.body;

   //updating the body of "update"
   //update.category_name = update.category_name.toUpperCase()
   update.user = req.Logued_user._id;
   console.log(update);

   const category = await Category.findByIdAndUpdate(id,update,{returnDocument: 'after'}).populate("user",'name');

   res.json({
    category
   })


}
deleteCategory = async (req = request, res = response) => {

    const{id} = req.params;

    const category = await Category.findByIdAndUpdate(id,{status:false},{returnDocument: 'after'});

    res.json({
        category
    })
}

module.exports = {
    getCategory,
    getCategories,
    updateCategory,
    deleteCategory,
    createCategory
};

