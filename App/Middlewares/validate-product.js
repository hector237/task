const { response, request } = require("express");
const Product = require("../Models/Product");


const existProductID = async( id ) => {
    const exist_Product = await Product.findOne({id});
    if( !exist_Product ){
        throw new Error (`The product doesn't exist in DATABASE`)
    }
}

const istOwner = async(  req = request, res = response, next) => {
    
    const {id} = req.params;
    const exist_Product = await Product.findOne({id});

    console.log(req.Logued_user);
    if (exist_Product.user != req.Logued_user) {
        throw new Error (`The product doesn't exist in DATABASE`)
    }
    next();
}




// const istOwner = async () => {
//     return async (req = request, res = response, next) => {
//         const { id } = req.params;
//         console.log(id);
        
//         const product = await Product.findOne({id});

//         console.log(product);
//         console.log(product.user != req.Logued_user._id);

//     // Compare the user_id of product with the logued user
//     if (product.user != req.Logued_user._id) {
//         throw new Error (`The product doesn't exist in DATABASE`)
//     }
//     next();
//         }
    
//     }


module.exports = {
    existProductID,
    istOwner,
}