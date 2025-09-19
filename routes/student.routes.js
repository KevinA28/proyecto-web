const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');
const auth = require('../middlewares/auth.middleware');

//router.use(auth); // proteger todas las rutas

router.get('/', studentController.getAll);
router.get('/:id', studentController.getById);
router.post('/', studentController.create);
router.put('/:id', studentController.update);
router.delete('/:id', studentController.delete);

module.exports = router;
