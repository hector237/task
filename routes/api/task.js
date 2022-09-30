const {Router} = require('express');
const { getTask, getTasks, createTask, updateTask, deleteTask } = require('../../App/Controller/TaskController');
const BD = require('../../config/database');

const router = Router();

router.get('/:id', getTask);
router.get('/', getTasks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);



router.get('/testdatabase', (req, res) => {

    

});

module.exports = router;