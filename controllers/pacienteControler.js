const Paciente = require('../models/Paciente');

//funcion para buscar los pacientes que esté en la base de datos
exports.buscarPacientes = async(req, res) => {
    try {
        const paciente = await Paciente.find();
        res.json(paciente)

        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al buscar los pacientes');
    }
}


//Creamos una función para agregar paciente
exports.agregarPacientes = async(req, res) => {
    try {
        let paciente;
        paciente = new Paciente(req.body)
        await paciente.save();
        res.send(paciente);
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al agregar un paciente');
    }
}


//Función para mostrar un solo paciente
exports.buscarPaciente = async(req, res) =>{
    try {
        let paciente = await Paciente.findById(req.params.id) //consultar el id y traer el paciente
        if(!paciente){
            res.status(404).json({msg:"Paciente no encontrado con ese ID"});
            return
        }
        res.send(paciente);

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al buscar un paciente');
    }
}

//Funcion para eliminar un paciente

exports.eliminarPaciente = async(req, res) =>{
    try {
        let paciente = await Paciente.findById(req.params.id); //primiero tiene que buscarlo
        if(!paciente){
            res.status(404).json({msg:"El paciente no existe"}); //cuando no lo encuentra
            return
        }
        await Paciente.findOneAndDelete({_id: req.params.id}); //ya encontrado con el id lo pasa a elimina.
        res.json({msg: "El paciente ha sido eliminado"});
        return

        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al eliminar un paciente');
    }
}

//Función para actualizar un paciente
exports.actualizarPaciente = async(req, res) =>{
    try {
        const{documento, nombres, apellidos, telefono, direccion, dr, especialidad} = req.body
        let paciente = await Paciente.findById(req.params.id);

        if(!paciente){
            res.status(400).json({msg: "El paciente no existe"});
        }else{ //se trae todos los datos del paciente
            paciente.documento = documento;
            paciente.nombres = nombres;
            paciente.apellidos = apellidos;
            paciente.telefono = telefono;
            paciente.direccion = direccion;
            paciente.dr = dr;
            paciente.especialidad = especialidad;

            paciente = await Paciente.findOneAndUpdate({_id: req.params.id}, paciente, {new: true});
            res.json(paciente);
        }


    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al actualizar un paciente');
    }
}