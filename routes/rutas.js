const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteControler');

//Estas son las rutas de nuestro crud

router.post('/', clienteController.agregarClientes);
router.get('/', clienteController.buscarClientes);
router.get('/:id', clienteController.buscarCliente); //para buscar el id
router.delete('/:id', clienteController.eliminarCliente); //para eliminar 1 cliente
router.put('/:id', clienteController.actualizarCliente); //para actualizar


module.exports = router;