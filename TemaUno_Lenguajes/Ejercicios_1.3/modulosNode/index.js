const fs = require('fs'); // Importa la herramienta de archivos

fs.writeFile('archivo.txt', 'Hola desde Node.js', (err) => {
    if (err) throw err; // Si hay un error, lo lanza
    console.log('El archivo ha sido creado con exito');

    // DESAFIO 1
    fs.readFile('archivo.txt', 'utf8', (err, data) => { //utf8 para que el contenido se muestre como texto
    if (err) throw err;
    console.log('Contenido del archivo:', data); // Muestra el contenido del archivo
    });


});

