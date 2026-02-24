const fs = require('fs'); // Importa la herramienta de archivos

fs.writeFile('archivo.txt', 'Hola desde Node.js', (err) => {
    if (err) throw err; // Si hay un error, lo lanza
    console.log('El archivo ha sido creado con exito');
});