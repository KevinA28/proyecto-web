const { Alumno } = require('../models');

exports.getAll = async (req, res) => {
  const alumnos = await Alumno.findAll();
  res.json(alumnos);
};

exports.getById = async (req, res) => {
  const alumno = await Alumno.findByPk(req.params.id);
  if (!alumno) return res.status(404).json({ error: 'No encontrado' });
  res.json(alumno);
};

exports.create = async (req, res) => {
  const alumno = await Alumno.create(req.body);
  res.status(201).json(alumno);
};

exports.update = async (req, res) => {
  const alumno = await Alumno.findByPk(req.params.id);
  if (!alumno) return res.status(404).json({ error: 'No encontrado' });
  await alumno.update(req.body);
  res.json(alumno);
};

exports.delete = async (req, res) => {
  const alumno = await Alumno.findByPk(req.params.id);
  if (!alumno) return res.status(404).json({ error: 'No encontrado' });
  await alumno.destroy();
  res.json({ mensaje: 'Alumno eliminado' });
};
