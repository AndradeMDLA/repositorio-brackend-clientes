//se define una constante y se una la dependencia mongoose(esta conecta en fonend con el bagend)
const mongoose = require('mongoose');
require('dotenv').config(); //dontenv es la variable de entorno

//se crea la conexión con mongo db
const conectarBD = () => {
    //con promesa
    mongoose
    .connect(process.env.DB_MONGO)
    .then(() => console.log('Estamos conectados con mongo'))
    .catch((err) => console.error(err));
}

module.exports = conectarBD;
