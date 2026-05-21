const { retornarNulo, retornarIndefinido, retornarDefinido } = require('./valores');

test('verifica que el valor sea estrictamente null', () => {
  expect(retornarNulo()).toBeNull();
});

test('verifica que el valor sea undefined', () => {
  expect(retornarIndefinido()).toBeUndefined();
});

test('verifica que la variable esté definida', () => {
  expect(retornarDefinido()).toBeDefined();
});