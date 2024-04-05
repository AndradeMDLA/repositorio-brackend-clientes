const Cliente = require('../models/Cliente');

//funcion para buscar los clientes que esté en la base de datos
exports.buscarClientes = async(req, res) => {
    try {
        const cliente = await Cliente.find();
        res.json(cliente)

        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al buscar los cliente');
    }
}


//Creamos una función para agregar clientes
exports.agregarClientes = async(req, res) => {
    try {
        let cliente;
        cliente = new Cliente(req.body)
        await cliente.save();
        res.send(cliente);
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al agregar un cliente');
    }
}


//Función para mostrar un solo cliente
exports.buscarCliente = async(req, res) =>{
    try {
        let cliente = await Cliente.findById(req.params.id) //consultar el id y traer el cliente
        if(!cliente){
            res.status(404).json({msg:"Cliente no encontrado con ese ID"});
            return
        }
        res.send(cliente);

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al buscar un cliente');
    }
}

//Funcion para eliminar un cliente

exports.eliminarCliente = async(req, res) =>{
    try {
        let cliente = await Cliente.findById(req.params.id); //primiero tiene que buscarlo
        if(!cliente){
            res.status(404).json({msg:"El cliente no existe"}); //cuando no lo encuentra
            return
        }
        await Cliente.findOneAndDelete({_id: req.params.id}); //ya encontrado con el id lo pasa a elimina.
        res.json({msg: "El cliente ha sido eliminado"});
        return

        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al eliminar un cliente');
    }
}

//Función para actualizar un cliente
exports.actualizarCliente = async(req, res) =>{
    try {
        const{nombres, apellidos, documento, correo, telefono, direccion} = req.body
        let cliente = await Cliente.findById(req.params.id);

        if(!cliente){
            res.status(400).json({msg: "El cliente no existe"});
        }else{ //se trae todos los datos del cliente
            cliente.nombres = nombres;
            cliente.apellidos = apellidos;
            cliente.documento = documento;
            cliente.correo = correo;
            cliente.telefono = telefono;
            cliente.direccion = direccion;

            cliente = await Cliente.findOneAndUpdate({_id: req.params.id}, cliente, {new: true});
            res.json(cliente);
        }


    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al actualizar un cliente');
    }
}