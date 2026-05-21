function retornarNulo() {
  return null;
}

function retornarIndefinido() {
  return undefined;
}

function retornarDefinido() {
  return "datos_cargados"; // Cualquier valor que no sea undefined sirve
}

module.exports = { retornarNulo, retornarIndefinido, retornarDefinido };