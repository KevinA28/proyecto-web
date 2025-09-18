const express = require('express');
const app = express();
const authRoutes = require('./routes/auth.routes');
const studentRoutes = require('./routes/student.routes');

app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/alumnos', studentRoutes);

module.exports = app;
