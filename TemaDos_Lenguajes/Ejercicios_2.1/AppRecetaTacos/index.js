import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

// 10.c Utiliza el middleware express.static para servir los archivos
app.use(express.static('public'));

// 10.d Utiliza el middleware bodyParser.json()
app.use(bodyParser.json());

// 10.a Crea la constante recetaJSON
const recetaJSON = `[
  {
    "id": "0001",
    "tipo": "taco",
    "nombre": "Taco lechon",
    "precio": 20.00,
    "ingredientes": {
      "proteina": { "nombre": "Puerco", "preparacion": "Horneado" },
      "salsa": { "nombre": "Tomate verde", "picor": "Medio" },
      "acompañamientos": [
        { "nombre": "Cebolla", "cantidad": "1 cucharada" },
        { "nombre": "Guacamole", "cantidad": "2 cucharadas" }
      ]
    }
  },
  {
    "id": "0002",
    "tipo": "taco",
    "nombre": "Taco de Pollo",
    "precio": 22.00,
    "ingredientes": {
      "proteina": { "nombre": "Pollo", "preparacion": "Horneado en pib con achiote" },
      "salsa": { "nombre": "Salsa Xnipec", "picor": "Muy Alto" },
      "acompañamientos": [
        { "nombre": "Cebolla morada encurtida", "cantidad": "1 cucharada" }
      ]
    }
  },
  {
    "id": "0003",
    "tipo": "taco",
    "nombre": "Taco de Relleno Negro",
    "precio": 25.00,
    "ingredientes": {
      "proteina": { "nombre": "Pavo", "preparacion": "Hervido en recado negro" },
      "salsa": { "nombre": "Caldo de relleno negro", "picor": "Bajo" },
      "acompañamientos": [
        { "nombre": "Huevo cocido", "cantidad": "1/4 de pieza" },
        { "nombre": "Chile habanero picado", "cantidad": "Al gusto" }
      ]
    }
  },
  {
    "id": "0004",
    "tipo": "taco",
    "nombre": "Taco de Pescado",
    "precio": 25.00,
    "ingredientes": {
      "proteina": { "nombre": "Pescado", "preparacion": "Hervido en recado negro" },
      "salsa": { "nombre": "No tiene", "picor": "Sin picor" },
      "acompañamientos": [
        { "nombre": "Cebolla morada encurtida", "cantidad": "1 cucharada" },
        { "nombre": "Chile habanero picado", "cantidad": "Al gusto" }
      ]
    }
  }
]`;

// 10.b Deserializa la cadena JSON a objeto JS
const recetasTacos = JSON.parse(recetaJSON);

// 10.e Crea el handler GET para el endpoint /receta/:type
app.get('/receta/:type', (req, res) => {
    // Busca en la base de datos el taco que coincida con lo que pidió el usuario
    const elegirTaco = recetasTacos.find(r => r.ingredientes.proteina.nombre.toLowerCase() === req.params.type.toLowerCase());
    
    // Si lo encuentra manda el taco, si no, manda un mensaje de error
    res.json(elegirTaco || { error: "Receta no encontrada" });
});

//Configurar el método para iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo exitosamente en http://localhost:${PORT}`);
});