const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;
    const user = await User.create({ nombre, email, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar' });
  }
  
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Credenciales inválidas' });
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  res.json({ token });
};
