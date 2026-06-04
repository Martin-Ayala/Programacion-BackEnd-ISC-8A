import { jest } from '@jest/globals';
import request from 'supertest';
import app from './index.js';
import Usuario from './models/usuario.model.js';

describe('Pruebas unitarias para Rutas API CRUD', () => {
  
  // Limpiamos los "espías" después de cada prueba
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('GET /usuarios debería retornar un status 200 y la lista de usuarios', async () => {
    // 1. Preparamos los datos falsos
    const usuariosFalsos = [
      { _id: '64a1b2c3d4e5f', nombre: 'Martin', edad: 22, correo: 'martin@test.com' },
      { _id: '64a1b2c3d4e6a', nombre: 'Julian', edad: 22, correo: 'julian@test.com' }
    ];

    // 2. "Espiamos" específicamente la función 'find' de Mongoose y le inyectamos los datos.
    jest.spyOn(Usuario, 'find').mockResolvedValue(usuariosFalsos);

    // 3. Supertest hace la petición HTTP a la ruta
    const response = await request(app).get('/usuarios');

    // 4. Validamos que la ruta responda correctamente sin tocar MongoDB
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(usuariosFalsos);
    
    // Verificamos que nuestro backend efectivamente haya intentado buscar en la BD
    expect(Usuario.find).toHaveBeenCalledTimes(1);
  });

});