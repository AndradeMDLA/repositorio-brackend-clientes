//la palabra "require" permite trabajar con la librería express en este caso
const express = require ('express');
const conectarBD = require('../config/db'); 
const cors = require('cors');     // se llama a la dependencia cors

//Ahora creamos el servidor
const app = express(); //se instancia "app" va a ser la instancia con express

//enlazamos la conexión con la base de datos
conectarBD();
app.use(cors());

app.use(express.json());
app.use('/api/clientes', require('../routes/rutas'));

//conexión a Pacientes
app.use('/api/pacientes', require('../routes/rutasPaciente'));


//definir ruta principal
app.get('/',(req, res) => {
    res.send('Hola Mundo desde la web');
})
//se define una constante para el puerto que tendrá configuracion local o en la nube del puerto
const port = process.env.PORT || 3000;

//configurar el listen(el puerto que nos va a escuchar)
app.listen(port, () => {
    console.log('El servidor está conectado http://localhost:3000/ ');
})










