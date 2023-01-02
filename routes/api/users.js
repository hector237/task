const {Router} = require('express');

//Validations
const { check } = require('express-validator');
const {} = require('../../App/Middlewares')
const { existRole, hasRole } = require('../../App/Middlewares/validate-role');
const { existEmail, validate, existUserID } = require('../../App/Middlewares/validate-user');
const { validateJWT } = require('../../App/Middlewares/generate-jwt');

//Controllers
const {  getUser, createUser, updateUser, deleteUser, getUsers } = require('../../App/Controller/UserController');

const router = Router();


router.get('/', getUsers);
router.post('/',[
    check('name', 'Name is obligatory').not().isEmpty(),
    check('password', 'the password must be larger than 6 characters').isLength(({min: 6})),
    check('email', 'PLease introduce a valid email').isEmail().custom(existEmail),
    check('role').custom(existRole),
    validate
], createUser);
router.put('/:id',[
    validateJWT,
    check('id', "the ID isn't valid").isMongoId(),
    check('id').custom(existUserID),
    validate
], updateUser);
router.delete('/:id',[
    validateJWT,
    //isAdmin,
    hasRole('ADMIN_ROLE', "MODERATOR_ROLE"),
    check('id', "the ID isn't valid").isMongoId(),
    check('id').custom(existUserID),
    validate
], deleteUser);

//Admin routes

module.exports = router;