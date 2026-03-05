import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // Combinamos ambas instrucciones en una sola para evitar el error del servidor
    res.status(200).send('<h1>Hola Mundo</h1>');
});

app.post('/registro', (req, res) => {
    res.sendStatus(201);
});

app.put('/usuario/actualizar', (req, res) => {
    res.sendStatus(200);
});

app.patch('/usuario/modificar', (req, res) => {
    res.sendStatus(200);
});

app.delete('/usuario/eliminar', (req, res) => {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Servidor ejecutandose en puerto ${port}`);
});