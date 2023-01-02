const Category = require('./validate-category');
const JWT = require('./generate-jwt');
const Product = require ('./validate-product');
const Role = require ('./validate-role.js');
const User = require('./validate-user');


module.exports = {
    JWT,
    Category,
    Product,
    Role,
    User,
}