//express importations
const {Router} = require('express');

//Middlewares
const { check } = require('express-validator');
const { hasRole } = require('../../App/Middlewares/validate-role');
const { validateJWT } = require('../../App/Middlewares/generate-jwt');
const { validate } = require('../../App/Middlewares/validate-user');
const { existProductID, istOwner } = require('../../App/Middlewares/validate-product');
const { existCategory } = require('../../App/Middlewares/validate-category');

//Controller
const { getProduct, getProducts, createProduct, updateProduct, deleteProduct } = require('../../App/Controller/ProductController');


const router = Router();

/**
 * public
 */
router.get('/:id',[
    check('id', "the ID isn't valid").isMongoId(),
    check('id').custom(existProductID),
    validate
], getProduct);

/**
 * public
 */
router.get('/',[], getProducts);
/**
 * private 
 * rol: seller
 * category
 */
router.post('/',[
    validateJWT,
    hasRole('SELLER', "ADMIN_ROLE"),
    check('product_name', 'Name is obligatory').not().isEmpty(),
    check('category', 'Must contain at least one category').not().isEmpty(),
    check('category', "the ID isn't valid").isMongoId(),
    check('category').custom(existCategory),
    validate
], createProduct);

/**
 * private
 * rol: seller & admin
 * owner
 */
router.put('/:id',[
    validateJWT,
    hasRole('SELLER', "ADMIN_ROLE"),
    check('id', "the ID isn't valid").isMongoId(),
    check('id').custom(existProductID),
    //check('id').custom(istOwner),
    validate
], updateProduct);

/**
 * private
 * rol: seller & Admin
 * 
 */
router.delete('/:id',[
    validateJWT,
    hasRole('SELLER', "ADMIN_ROLE"),
    check('id', "the ID isn't valid").isMongoId(),
    check('id').custom(existProductID),
    //check('id').custom(istOwner),
    validate
], deleteProduct);

module.exports = router;