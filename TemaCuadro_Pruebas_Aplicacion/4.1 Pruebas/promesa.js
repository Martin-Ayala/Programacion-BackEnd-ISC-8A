function simularPeticion(debeTenerExito) {
  return new Promise((resolve, reject) => {
    // Simulamos un retraso típico de una petición asíncrona
    setTimeout(() => {
      if (debeTenerExito) {
        resolve('Datos obtenidos correctamente');
      } else {
        reject('Error de conexión');
      }
    }, 100);
  });
}

module.exports = simularPeticion;