const multiplicar = require('./negacion');

test('verifica que 3 * 3 NO sea igual a 10', () => {
  // Usamos .not antes del toBe para asegurar que el resultado sea diferente de 10
  expect(multiplicar(3, 3)).not.toBe(10);
});