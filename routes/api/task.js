const {Router} = require('express');
const { getTask, getTasks, createTask, updateTask, deleteTask } = require('../../App/Controller/TaskController');
const BD = require('../../config/database');

const router = Router();

router.get('/:id', getTask);
router.get('/', getTasks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id3.', deleteTask);

router.get('/testdatabase', (req, res) => {

    const connection = new BD().connection();

    const data = connection.connect((error) => {
        if (error) {
            res.send(error);
        }
        else {


            console.log("connection established");
        }
    });
    connection.end();
    res.json(JSON.stringify(data));

});

module.exports = router;