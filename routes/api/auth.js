const {Router} = require('express');

//Controllers
const { login } = require('../../App/Controller/LoginController');

//Validations
const { check } = require('express-validator');
const { validate } = require('../../App/Middlewares/validate-user');


const router = Router();

router.post('/login',[
    check('email', 'The email is obligatory').isEmail(),
    check('password', 'The password is obligatory').not().isEmpty(),
    validate
], login);






module.exports = router;