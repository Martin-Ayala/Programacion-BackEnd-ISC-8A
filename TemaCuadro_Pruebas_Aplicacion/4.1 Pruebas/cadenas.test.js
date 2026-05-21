const obtenerTituloProyecto = require('./cadenas');

test('verifica que el título contenga la palabra Dashboard', () => {
  // toMatch puede recibir una expresión regular (entre barras /.../) o un string
  expect(obtenerTituloProyecto()).toMatch(/Dashboard/);
});