import axios from "axios";

// 1. Pegamos la misma llave que ya conseguiste
const MI_LLAVE_API = "pub_f5bf974d69fcb79dee42dc3e7a4f3a0c99c40a70c297abc14818271cf7fe67c9"; 

const registrarUsuario = async () => {
  try {
    const respuesta = await axios.post('https://reqres.in/api/register', 
      // Parte 1: Los datos del usuario (Body)
      {
        email: 'eve.holt@reqres.in',
        password: 'pistol'
      },
      // Parte 2: La configuración de seguridad (Headers)
      {
        headers: {
          'x-api-key': MI_LLAVE_API
        }
      }
    );
    console.log('Registro exitoso:', respuesta.data);
  } catch (error) {
    console.error('Error en el registro:', error?.response?.data || error.message);
  }
};

registrarUsuario();