const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControler');

//Estas son las rutas de nuestro crud

router.post('/', pacienteController.agregarPacientes);
router.get('/', pacienteController.buscarPacientes);
router.get('/:id', pacienteController.buscarPaciente); //para buscar el id
router.delete('/:id', pacienteController.eliminarPaciente); //para eliminar 1 paciente
router.put('/:id', pacienteController.actualizarPaciente); //para actualizar

module.exports = router;