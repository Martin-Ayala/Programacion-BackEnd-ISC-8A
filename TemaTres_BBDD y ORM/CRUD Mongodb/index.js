import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const puerto = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Configuración de la Base de Datos
const uri = process.env.uri;
const client = new MongoClient(uri);
let db;
let collection;

// Conexión a la base de datos
async function conectarBD() {
    try {
        await client.connect();
        db = client.db('test'); 
        collection = db.collection('usuarios'); 
        console.log("Conexión exitosa a la base de datos");
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }
}
conectarBD();

app.get('/', (req, res) => {
    res.send('Bienvenido a mi API CRUD sin ORM');
});

// --- RUTAS CRUD ---

// 1. CREAR (POST)
app.post('/usuarios', async (req, res) => {
    try {
        const { nombre, edad, correo } = req.body;

        // Validación manual de datos
        if (!nombre || typeof nombre !== 'string') {
            return res.status(400).json({ error: 'Ingresar el nombre' });
        }
        if (edad === undefined || typeof edad !== 'number') {
            return res.status(400).json({ error: 'Ingresar la edad' });
        }
        if (!correo || typeof correo !== 'string') {
            return res.status(400).json({ error: 'Ingresar el correo' });
        }

        const fechaActual = new Date();
        const nuevoUsuario = {
            nombre: nombre,
            edad: edad,
            correo: correo,
            createdAt: fechaActual,
            updatedAt: fechaActual
        };

        const resultado = await collection.insertOne(nuevoUsuario);
        const usuarioInsertado = await collection.findOne({ _id: resultado.insertedId });
        
        res.status(201).json(usuarioInsertado);

    } catch (error) {
        // Manejo del error de duplicidad de correo (Error 11000 en MongoDB)
        if (error.code === 11000) {
            return res.status(400).json({ error: 'Ese correo ya está registrado' });
        }
        console.error("Error al crear el usuario:", error);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
});

// 2. ACTUALIZAR (PUT)
app.put('/usuario/:id', async (req, res) => {
    try {
        const { id } = req.params;
        
        // Usamos $set para actualizar solo los campos enviados en req.body
        const resultado = await collection.updateOne(
            { _id: new ObjectId(id) }, 
            { $set: req.body } 
        );

        if (resultado.matchedCount === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const usuarioActualizado = await collection.findOne({ _id: new ObjectId(id) });
        res.status(200).json(usuarioActualizado);

    } catch (error) {
        console.error("Error al actualizar el usuario:", error);
        res.status(500).json({ error: 'Error al actualizar el usuario o ID inválido' });
    }
});

// 3. ELIMINAR (DELETE)
app.delete('/usuario/:id', async (req, res) => {
    try {
        const { id } = req.params;
        
        const resultado = await collection.deleteOne({ _id: new ObjectId(id) });
        
        if (resultado.deletedCount === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.status(200).json({ message: 'Usuario eliminado' });

    } catch (error) {
        console.error("Error al eliminar el usuario:", error);
        res.status(500).json({ error: 'Error al eliminar el usuario o ID inválido' });
    }
});

// 4. LEER TODOS (GET)
app.get('/usuarios', async (req, res) => {
    try {
        // .toArray() es necesario en el driver nativo para convertir el cursor en un arreglo
        const usuarios = await collection.find({}).toArray();
        res.status(200).json(usuarios);
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
});

// 5. LEER UNO POR ID (GET)
app.get('/usuario/:id', async (req, res) => {
    try {
        const { id } = req.params; 
        
        const usuario = await collection.findOne({ _id: new ObjectId(id) });

        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        res.status(200).json(usuario);
        
    } catch (error) {
        console.error("Error al obtener el usuario por ID:", error);
        res.status(500).json({ error: 'Error al obtener el usuario por ID o formato incorrecto' });
    }
});

app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});