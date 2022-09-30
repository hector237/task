const {Router} = require('express');
const { getRole, getRoles, createRole, updateRole, deleteRole } = require('../../App/Controller/RoleController');
const BD = require('../../config/database');

const router = Router();

router.get('/:id', getRole);
router.get('/', getRoles);
router.post('/', createRole);
router.put('/:id', updateRole);
router.delete('/:id', deleteRole);



router.get('/testdatabase', (req, res) => {

    

});

module.exports = router;