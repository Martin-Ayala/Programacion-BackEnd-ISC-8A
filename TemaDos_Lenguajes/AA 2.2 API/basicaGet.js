import axios from "axios";

// Aquí ponemos la llave exacta que sacaste de la página
const MI_LLAVE_API = "pub_f5bf974d69fcb79dee42dc3e7a4f3a0c99c40a70c297abc14818271cf7fe67c9"; 

const obtenerUsuario = async () => {
  try {
    const response = await axios.get('https://reqres.in/api/users/4', {
      headers: {
        // La Autenticación Básica original de tu tarea
        'Authorization': 'Basic ' + Buffer.from('eve.holt@reqres.in:pistol').toString('base64'),
        
        // ¡El nuevo pase de seguridad!
        'x-api-key': MI_LLAVE_API 
      }
    });
    console.log('Datos del usuario:', response.data);
  } catch (error) {
    console.error('Error al obtener datos del usuario:', error?.response?.data || error.message);
  }
};

obtenerUsuario();