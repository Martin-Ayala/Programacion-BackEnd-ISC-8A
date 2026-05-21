const obtenerUsuario = require('./comparacion');

test('comprobar que los objetos tienen exactamente las mismas propiedades y valores', () => {
  const objetoEsperado = {
    nombre: 'Martin Ayala',
    semestre: 8
  };

  // toEqual verifica de forma profunda (deep equality) cada campo del objeto
  expect(obtenerUsuario()).toEqual(objetoEsperado);
});