// cors.js
const cors = require('cors');

// Opciones de configuración
const corsOptions = {
  origin: 'http://localhost:3000', // URL del frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // Permitir cookies si se usan
};

module.exports = cors(corsOptions);

