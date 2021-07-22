const mysql = require('mysql');

var conexion =   mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'location',
  port: '3306'
});

conexion.connect(function(error){
  if(error){
    throw error;
  }else {
    console.log('conexion exitosa');
  }
})

module.exports = conexion;
