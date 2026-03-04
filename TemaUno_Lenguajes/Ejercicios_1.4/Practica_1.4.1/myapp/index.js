// Importamos Express y preparamos la configuración básica
import express from "express";
const app = express();
const port = 3000;

// Rutas (Endpoints) que nuestro servidor sabe responder
app.get("/", (req, res) => {
    res.send("<h1>Bienvenido a mi página web de Martin Ayala</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>Acerca de</h1>");
});

// Middleware para manejar rutas inexistentes (Error 404)
// Nota: Se deja de usar el "*" porque la práctica usa Express v4, 
// pero en la v5 (más reciente) las reglas son más estrictas. 
// Al dejar el paréntesis vacío, atrapa automáticamente todo lo que no coincidió arriba.
app.use((req, res) => {
    res.status(404).send("<h1>404 Not Found</h1>");
});

// Encendemos el servidor para que empiece a escuchar las peticiones
app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});