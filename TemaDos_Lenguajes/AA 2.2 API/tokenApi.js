import axios from 'axios';

const loginUrl = 'https://dummyjson.com/auth/login';
const perfilUrl = 'https://dummyjson.com/auth/me';
const credenciales = { username: 'emilys', password: 'emilyspass' };

async function tokenApi() {
  try {
    // 1. Iniciar sesión y extraer el token
    const { data } = await axios.post(loginUrl, credenciales);
    
    // Leemos accessToken
    const token = data.accessToken; 
    console.log("Token obtenido con éxito.");

    // El token tiene 3 partes separadas por puntos. El Payload es la segunda parte (índice 1)
    const payloadCodificado = token.split('.')[1]; 
    // Buffer nativo de Node.js para traducir de Base64 a texto normal
    const payloadTexto = Buffer.from(payloadCodificado, 'base64').toString('utf-8');
    // Convertimos a un objeto de JavaScript
    const datosDelToken = JSON.parse(payloadTexto);
    console.log(datosDelToken);

    // 2. Acceder con token VALIDO
    const perfil = await axios.get(perfilUrl, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log("Acceso permitido. Usuario:", perfil.data.firstName);

    // 3. Acceder con token INVALIDO
    await axios.get(perfilUrl, {
      headers: { Authorization: `Bearer token_fake_16` }
    });

  } catch (error) {
    // Capturamos el rechazo del paso 3
    console.error("Acceso denegado:", error.response?.data?.message || error.message);
  }
}

tokenApi();
