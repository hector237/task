const {Router} = require('express');
const {  getUser, getTUser, createUser, updateUser, deleteUser } = require('../../App/Controller/UserController');
const BD = require('../../config/database');

const router = Router();

router.get('/:id', getUser);
router.get('/', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id3.', deleteUser);