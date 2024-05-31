const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3306;

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost', // Cambiar a la dirección IP del servidor de SQL Workbench
    user: 'root',
    password: '',
    database: 'server'
});

// Conectar a la base de datos
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conexión exitosa a la base de datos MySQL');
});

// Configurar el middleware body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas para interactuar con la base de datos
app.post('/crearUsuario', (req, res) => {
    const { nombre, apellido, rol, correo, contraseña } = req.body;
    const sql = 'INSERT INTO usuarios (nombre, apellido, rol, correo, contraseña) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [nombre, apellido, rol, correo, contraseña], (err, result) => {
        if (err) {
            throw err;
        }
        res.send('Usuario creado exitosamente');
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor Express corriendo en el puerto ${port}`);
});