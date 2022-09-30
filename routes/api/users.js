const {Router} = require('express');

//Validations
const { check } = require('express-validator');
const { validate } = require('../../App/Middlewares/validate-user');
const { existRole } = require('../../App/Middlewares/validate-role');
const { existEmail } = require('../../App/Middlewares/validate-email');
const { existID } = require('../../App/Middlewares/validate-id');

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
    check('id', "the ID isn't valid").isMongoId(),
    check('id').custom(existID),
    validate
], updateUser);
router.delete('/:id',[
    check('id', "the ID isn't valid").isMongoId(),
    check('id').custom(existID),
    validate
], deleteUser);

//Admin routes

module.exports = router;