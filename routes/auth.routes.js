const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// NO necesitas importar middleware aquí, estas rutas no están protegidas

// Rutas públicas
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
