//Express importations
const { response,request } = require("express");

//Model
const Product = require("../Models/Product");

getProduct = async (req, res = response) => {
    const{id} = req.params;

    const product = await Product.findById(id,{status: true}).populate('user','name');
    
    res.status(200).json({
        product
    })
}

getProducts = async (req = request, res = response) => {
    
    const{limit = 5, skip = 0} = req.query;
    
    const [total, product] = await Promise.all([
       Product.countDocuments({status: true}),
       Product.find({isActive: true})
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
        product

    })
}

createProduct = async (req = request, res = response) => {
    
    //build the Product body with the information from client
    const data = {
        product_name: req.body.product_name,
        description: req.body.description,
        price: req.body.price,
        status: true,
        category: req.body.category,
        user: req.Logued_user._id,
    }

    console.log(data);

    const product = new Product(data);

    console.log("guardando en la BD");
    //save in DB
    await product.save();
    console.log("guardado en la BD");
    
    res.json({
        product
    })
}

updateProduct = async (req = request, res = response) => {
    //Obtain the information
   const {id} = req.params;
   const {_id, estatus, user, ...update} = req.body;

   //updating the body of "update"
   const product = await Product.findByIdAndUpdate(id,update,{returnDocument: 'after'});

   res.json({
    product
   })
}

deleteProduct = async (req = request, res = response) => {
    const{id} = req.params;

    console.log(req.Logued_user);

    const product = await Product.findByIdAndUpdate(id,{status:false},{returnDocument: 'after'});

    res.json({
        product
    })
}

module.exports = {
    createProduct,
    deleteProduct,
    getProduct,
    getProducts,
    updateProduct,
};

