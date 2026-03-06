import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
// Paso 6: Importar body-parser
import bodyParser from "body-parser"; 

const __dirname = dirname(fileURLToPath(import.meta.url));
/* import.meta.url proporciona la URL del módulo actual.
   fileURLToPath(import.meta.url) convierte esa URL en una ruta de archivo.
   dirname() recupera el nombre del directorio a partir de la ruta del archivo. */

console.log(__dirname);

const app = express();
const port = 3000;

// Paso 7: Implementar el middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Paso 8: codigo para el post
app.post("/submit", (req, res) => {
    console.log(req.body);
    res.send("Datos recibidos");
});

app.listen(port, () => {
    console.log(`Servidor ejecutandose en el puerto ${port}`);
});