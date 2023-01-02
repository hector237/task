const { Schema, model, Mongoose } = require('mongoose');


const CategorySchema = Schema({
    category_name:{
        type: "String",
        required: [true, 'The category name is required']
    },
    description:{
        type: 'String',
        default: 'No description added'
    },
    status:{
        type: Boolean,
        required: true,
        default: true,
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
})

CategorySchema.methods.toJSON = function (){

    const{__v, _id, user, status, ...category} = this.toObject();

    category.user_id = user;
    category.category_id = _id;

    return category;
}

module.exports = model('Category', CategorySchema)