import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Usuario from './models/usuario.model.js';

dotenv.config();

const app = express();
const puerto = 3000;

// Middleware para obtener los datos enviados desde Postman
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Bienvenido a mi API CRUD');
});

// Rutas para el CRUD de usuarios
app.post('/usuarios', async (req, res) => {
    try {
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
});

app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});

// Conexión a la base de datos MongoDB

// Define la URI
const uri = process.env.uri;

// Conecta a la base de datos
mongoose.connect(uri)
  .then(() => {
    console.log("Conexión exitosa a la base de datos");
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
  });