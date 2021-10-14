const mariadb = require('mariadb');

const config = {

    host    : 'localhost',
    user    : 'root',
    password: '1094camilo0217',
    database: 'prueba',
    port    : '3306'
}

var conexion;

try {
    conexion=mariadb.createPool(config);
} catch (error) {
    console.log("Error en la conexión: ",error);
}

module.exports=conexion;
