import express from 'express';
import axios from 'axios';

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Diccionario ÚNICO y completo (con descripciones)
const indicadores = {
    'dolar': { 
        serie: 'SF43718', 
        titulo: 'DÓLAR FIX (BANXICO)',
        descripcion: 'Tipo de cambio oficial determinado por Banxico para solventar deudas y obligaciones en moneda extranjera en México.'
    },
    'euro':  { 
        serie: 'SF46410', 
        titulo: 'EURO (BANXICO)',
        descripcion: 'Cotización oficial del Euro frente al Peso Mexicano en el mercado de divisas internacional.'
    },
    'tiie':  { 
        serie: 'SF43783', 
        titulo: 'TASA TIIE 28 DÍAS',
        descripcion: 'Tasa de Interés Interbancaria de Equilibrio. Es la base que usan los bancos y SOFIPOs para definir cuánto te pagan por invertir o cuánto te cobran por un préstamo.'
    },
    'udis':  { 
        serie: 'SP68257', 
        titulo: 'VALOR UDIS',
        descripcion: 'Unidades de Inversión. Su valor sube a la par de la inflación para proteger el poder adquisitivo del dinero a través del tiempo.'
    }
};

app.get('/', async (req, res) => {
    try {
        const seleccion = req.query.indicador || 'dolar';
        const datosIndicador = indicadores[seleccion];

        const urlBanxico = `https://www.banxico.org.mx/SieAPIRest/service/v1/series/${datosIndicador.serie}/datos/oportuno`;
        
        const config = {
            headers: {
                'Bmx-Token': '36d83952a96ddc34adb95e1db89ffacdaa1899a7e19a4ef9c30a34914b71a21c' 
            }
        };

        const result = await axios.get(urlBanxico, config);
        const informacion = result.data.bmx.series[0].datos[0];
        let valorExacto = informacion.dato;

        if (seleccion === 'tiie') {
            valorExacto = `${valorExacto}%`;
        } else {
            valorExacto = `$${valorExacto} MXN`;
        }

        // Renderizamos enviando todos los datos, incluida la descripción
        res.render('index', {
            titulo: datosIndicador.titulo,
            valor: valorExacto,
            fecha: `Actualizado el: ${informacion.fecha}`,
            descripcion: datosIndicador.descripcion
        });

    } catch (error) {
        console.error('Error:', error.message);
        res.render('index', { 
            titulo: 'Error', 
            valor: '---', 
            fecha: 'Intenta de nuevo',
            descripcion: 'Hubo un problema al conectar con Banxico.'
        });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Monitor Financiero interactivo en http://localhost:${PORT}`);
});