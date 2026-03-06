import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
// Importar body-parser
import bodyParser from "body-parser"; 

const __dirname = dirname(fileURLToPath(import.meta.url));
/* import.meta.url proporciona la URL del módulo actual.
   fileURLToPath(import.meta.url) convierte esa URL en una ruta de archivo.
   dirname() recupera el nombre del directorio a partir de la ruta del archivo. */

console.log(__dirname);

const app = express();
const port = 3000;

//Variable global
var nombreEquipo = ""; 

// Primer middleware: body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// NUEVO MIDDLEWARE (Funcion registrador)
function registrador(req, res, next) { //creacion del middleware
    console.log(req.body); // Muestra los datos enviados por el usuario en la consola
    nombreEquipo = req.body["mascota"] + req.body["adjetivo"]; // Combina los valores de "mascota" y "adjetivo" para formar el nombre del equipo
    next(); // Llama a next() para pasar a la siguiente funcion en la pila de middleware
}

// Activar middleware
app.use(registrador)


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Codigo para el post
app.post("/submit", (req, res) => {
    res.send(`
        <h1>El nombre de tu equipo es:</h1>
        <h2>${nombreEquipo} ✌️</h2>
    `);
});

app.listen(port, () => {
    console.log(`Servidor ejecutandose en el puerto ${port}`);
});