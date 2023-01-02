const { Router } = require('express');
const { check } = require('express-validator');

//middlewares
const { validateJWT } = require('../../App/Middlewares/generate-jwt');
const { existCategory } = require('../../App/Middlewares/validate-category');
const { isAdmin } = require('../../App/Middlewares/validate-role');
const { validate } = require('../../App/Middlewares/validate-user');

//controllers
const { getCategories, getCategory, createCategory, updateCategory, deleteCategory } = require('../../App/Controller/CategoryController');

const router = Router();

// get one category from database
/**
 * role: public
 * validate JWT
 */
router.get('/:id', [
    check('id', "the ID isn't valid").isMongoId(),
    check('id').custom(existCategory),
    validate
], getCategory);

// get all categories from database
/**
 * role: public
 * Validate JWT
 */
router.get('/', [
    
], getCategories);
// create one category in database
/**
 * role: public
 * Validate JWT
 */
router.post('/', [
    validateJWT,
   // check().custom(isAdmin),
    check('category_name', 'Name is obligatory').not().isEmpty(),
    validate
], createCategory);

// update category in database
/**
 * rol: admin
 * ValidateJWT
 * 
 */
router.put('/:id', [
    validateJWT,
   // check('id').custom(isAdmin),
    check('id', "the ID isn't valid").isMongoId(),
    check('id').custom(existCategory),
    validate
], updateCategory);

// delete one category from database
/**
 * rol: admin
 * validateJWT
 */
router.delete('/:id', [
    validateJWT,
    //check().custom(isAdmin),
    check('id', "the ID isn't valid").isMongoId(),
    check('id').custom(existCategory),
    validate
], deleteCategory);





module.exports = router;