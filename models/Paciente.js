//se crea la variable para trabajar con la dependencia.
const mongoose = require('mongoose');

//el modelo que se crea acá debe ser igual al de la base de datos.
//se define la constante para montar el esquema
const pacienteSchena = mongoose.Schema({
    documento:{
        type: Number,
        required: true
    },    
    nombres:{
        type: String,
        required: true
    },
    apellidos:{
        type: String,
        required: true
    },

    telefono:{
        type: Number,
        required: true
    },    
    direccion:{
        type: String,
        required: true
    },
    dr:{
        type: String,
        required: true
    },
    especialidad:{
        type: String,
        required: true
    },
},{versionkey: false});
//exportamos el modulo
module.exports = mongoose.model('Paciente', pacienteSchena);