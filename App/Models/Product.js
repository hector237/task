//Importations

const { Schema, model } = require('mongoose');


const ProductSchema = Schema({
    product_name:{
        type: "String",
        required: [true, 'The role name is required']
    },
    description:{
        type: 'String',
        default: 'No description added'
    },
    price:{
        type: Number,
        required: true,
        default: 0,
    },
    status:{
        type: Boolean,
        required: true,
        default: true,
    },
    avaiable:{
        type: Boolean,
        default: true,
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
     category:{
         type: Schema.Types.ObjectId,
         ref: 'Category',
         required: true,
     },
});

/**
 * Rewrite how the object is send
 */
ProductSchema.methods.toJSON = function (){

    const{__v, _id, user,category, status, ...product} = this.toObject();

    product.user_id = user;
    product.category_id = category;
    product.product_id = _id;

    return product;
}

module.exports = model('Product', ProductSchema)