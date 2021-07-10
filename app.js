const mysql = require('mysql');
require('dotenv').config();

console.log(process.env.BD_CONECTION);
var connection = mysql.createConnection({

    host: process.env.BD_CONECTION,

    user: process.env.BD_USER,

    password: process.env.BD_PASS,

    database: 'node_mysql',

    port: 3306

});



connection.connect(function(error){

    if (error) {

        throw error;

    }else{

        console.log('FELICIDADES CONEXION EXITOSA');

    }

});

// var query = connection.query('INSERT INTO PERSONAJE(nombre, apellido, biografia) values (?,?,?)', ['PIKACHU', 'POKEMON', 'PRIMER POKEMON DE ASH.'], function (error, result){

//     if (error) {

//         throw error;

//     } else {

//         console.log(result);

//     }

// })

var query = connection.query('SELECT nombre, apellido, biografia FROM PERSONAJE WHERE personaje_id = ?', [1], function(error,result){

    if (error) {

        throw error;

    } else {

        var resultado = result

        console.log(result);

        if (resultado.length > 0) {

            console.log(resultado[0].nombre + ' ' + resultado[0].apellido + '/' + resultado[0].biografia );

        } else {

            console.log("REGISTRO NO ENCONTRADO");

        }

    }

})



connection.end();