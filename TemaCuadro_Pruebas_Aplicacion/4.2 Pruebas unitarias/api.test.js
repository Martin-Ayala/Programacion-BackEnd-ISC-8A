import { jest } from '@jest/globals';
import request from 'supertest';
import app from './index.js';
import Usuario from './models/usuario.model.js';

describe('Pruebas unitarias para Rutas API CRUD', () => {
  
  // Limpiamos después de cada prueba
  afterEach(() => {
    jest.restoreAllMocks();
  });

  //PRUEBA 1: GET (Todos los usuarios)
  test('GET /usuarios debería retornar un status 200 y la lista de usuarios', async () => {
    const usuariosFalsos = [
      { _id: '64a1b2c3d4e5f', nombre: 'Martin', edad: 22, correo: 'martin@test.com' },
      { _id: '64a1b2c3d4e6a', nombre: 'Julian', edad: 22, correo: 'julian@test.com' }
    ];

    jest.spyOn(Usuario, 'find').mockResolvedValue(usuariosFalsos);

    const response = await request(app).get('/usuarios');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(usuariosFalsos);
    expect(Usuario.find).toHaveBeenCalledTimes(1);
  });

  // PRUEBA 2: POST (Crear usuario)
  test('POST /usuarios debería crear un usuario y retornar status 201', async () => {
    const nuevoUsuario = { nombre: 'Alex', edad: 25, correo: 'alex@test.com' };
    const usuarioCreado = { _id: '64a1b2c3d4e99', ...nuevoUsuario };

    // Espiamos 'create' para simular que Mongoose guardó el dato
    jest.spyOn(Usuario, 'create').mockResolvedValue(usuarioCreado);

    // Supertest envía el objeto nuevoUsuario a través del .send()
    const response = await request(app).post('/usuarios').send(nuevoUsuario);

    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual(usuarioCreado);
    // Verificamos que el backend intentó crear el usuario con los datos correctos
    expect(Usuario.create).toHaveBeenCalledWith(nuevoUsuario);
  });

  // PRUEBA 3: GET by ID (Obtener un solo usuario)
  test('GET /usuario/:id debería retornar un usuario y status 200', async () => {
    const idFalso = '64a1b2c3d4e5f';
    const usuarioFalso = { _id: idFalso, nombre: 'Martin', edad: 22, correo: 'martin@test.com' };

    // Espiamos 'findById'
    jest.spyOn(Usuario, 'findById').mockResolvedValue(usuarioFalso);

    const response = await request(app).get(`/usuario/${idFalso}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(usuarioFalso);
    expect(Usuario.findById).toHaveBeenCalledWith(idFalso);
  });

  // PRUEBA 4: PUT (Actualizar usuario)
  test('PUT /usuario/:id debería actualizar y retornar el usuario con status 200', async () => {
    const idFalso = '64a1b2c3d4e5f';
    const datosActualizar = { edad: 23 }; // Solo actualizaremos la edad
    const usuarioAntiguo = { _id: idFalso, nombre: 'Martin', edad: 22, correo: 'martin@test.com' };
    const usuarioActualizado = { _id: idFalso, nombre: 'Martin', edad: 23, correo: 'martin@test.com' };

    // El código hace dos llamadas a la BD, así que espiamos ambas
    jest.spyOn(Usuario, 'findByIdAndUpdate').mockResolvedValue(usuarioAntiguo); 
    jest.spyOn(Usuario, 'findById').mockResolvedValue(usuarioActualizado);

    const response = await request(app).put(`/usuario/${idFalso}`).send(datosActualizar);

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(usuarioActualizado);
    expect(Usuario.findByIdAndUpdate).toHaveBeenCalledWith(idFalso, datosActualizar);
  });

  // PRUEBA 5: DELETE (Eliminar usuario)
  test('DELETE /usuario/:id debería eliminar y retornar status 200', async () => {
    const idFalso = '64a1b2c3d4e5f';
    const usuarioEliminado = { _id: idFalso, nombre: 'Martin', edad: 22, correo: 'martin@test.com' };

    // Espiamos 'findByIdAndDelete'
    jest.spyOn(Usuario, 'findByIdAndDelete').mockResolvedValue(usuarioEliminado);

    const response = await request(app).delete(`/usuario/${idFalso}`);

    expect(response.statusCode).toBe(200);
    // El API retorna un mensaje custom en lugar del usuario
    expect(response.body).toEqual({ message: 'Usuario eliminado' }); 
    expect(Usuario.findByIdAndDelete).toHaveBeenCalledWith(idFalso);
  });

});