const {Router} = require('express');
const {  getUser, createUser, updateUser, deleteUser, getUsers } = require('../../App/Controller/UserController');
const BD = require('../../config/database');

const router = Router();

router.get('/:id', getUser);
router.get('/', getUsers);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id3.', deleteUser);