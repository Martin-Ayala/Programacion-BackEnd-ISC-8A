const suma = require('./suma');

// Prueba inicial de la guía
test('sumar 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
});

// Prueba del inciso a: Igualdad exacta con toBe
test('sumar 10 + 10 es igual a 20', () => {
  expect(suma(10, 10)).toBe(20);
});

// Prueba del inciso d: Comparaciones numéricas
test('evaluar comparaciones numéricas con una suma', () => {
  const resultado = suma(10, 5); // Sabemos que el resultado es 15

  // Verifica si es mayor que (>)
  expect(resultado).toBeGreaterThan(10);
  
  // Verifica si es menor que (<)
  expect(resultado).toBeLessThan(20);
  
  // Verifica si es mayor o igual que (>=)
  expect(resultado).toBeGreaterThanOrEqual(15);
});