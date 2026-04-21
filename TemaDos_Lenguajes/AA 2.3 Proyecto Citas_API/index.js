// 1. Importa express y axios
import express from 'express';
import axios from 'axios';

// 2. Crea la aplicación de express y establece el número de puerto
const app = express();
const PORT = 3000;

// Motor de vistas y archivos estáticos
app.set('view engine', 'ejs');
app.use(express.static('public'));

// 4 y 5. El handler exacto que te dio el maestro
app.get('/', async (req, res) => {
    try {
        const result = await axios.get('https://api.animechan.io/v1/quotes/random');
        const quote = result.data.data.content; 
        const character = result.data.data.character.name;
        
        res.render('index', {
            quote: quote,
            character: character,
        });
        console.log("Datos recibidos:", result.data);

    } catch (error) {
        //Verifica si la respuesta del error contiene datos
        if (error.response) {
            //Imprime los datos del error retornados por la API
            console.log("Error de la API:", error.response.data);
        } else {
            console.log('Error de red/código:', error.message);
        }
        res.render('index', {
            quote: 'No se pudo obtener la cita. Intenta de nuevo más tarde.',
            character: 'Desconocido',
        });
    }
});

// 6. Escucha en el puerto predefinido y arranca el servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor arrancado y escuchando en http://localhost:${PORT}`);
});