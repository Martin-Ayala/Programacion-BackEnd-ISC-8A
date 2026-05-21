const simularPeticion = require('./promesa');

test('verifica que la promesa se resuelva (resolves)', () => {
  // Es vital el "return" para que Jest espere la resolución
  return expect(simularPeticion(true)).resolves.toBe('Datos obtenidos correctamente');
});

test('verifica que la promesa sea rechazada (rejects)', () => {
  // Verificamos el caso de fallo
  return expect(simularPeticion(false)).rejects.toBe('Error de conexión');
});