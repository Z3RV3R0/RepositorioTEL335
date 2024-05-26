import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Prueba',
    //port: '',
    charset: 'utf8mb4_general_ci',
});

connection.connect();
console.log('conectado mysql con exito');

connection.on('err',(err: any) => {
    if (err) {
        console.log(err);
        connection.end();
    }
})


export const dataBase = connection;