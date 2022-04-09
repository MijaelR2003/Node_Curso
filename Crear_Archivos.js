const fs = require('fs');

// crear archivos

fs.writeFile('./texto.txt', 'linea uno', function (err) {
    if (err) {
        console.log(err);
    }
    console.log("Archivo creado");
});

console.log("Ultima linea de codigo");


//ejecutar archivos
fs.readFile('./texto.txt', function (err, data) {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});