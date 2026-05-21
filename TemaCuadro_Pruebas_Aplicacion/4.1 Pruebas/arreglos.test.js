const obtenerTecnologias = require('./arreglos');

test('verifica que Supabase esté dentro del arreglo de tecnologías', () => {
  const stack = obtenerTecnologias();
  
  // toContain busca el elemento exacto dentro del array
  expect(stack).toContain('Supabase');
});