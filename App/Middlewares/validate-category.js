const { response } = require("express");
const Category = require("../Models/Category");


const existCategory = async( id ) => {
    const exist_Category = await Category.findOne({id});
    if( !exist_Category ){
        throw new Error (`The category ${id} doesn't exist in DATABASE`)
    }
}

module.exports = {
    existCategory
}