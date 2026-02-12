// Archivo: mat.js
/*
  i. Crea un módulo que contenga funciones matemáticas 
  aritméticas y utilízalo en otro archivo.
*/

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "No se puede dividir por cero";
    }
    return a / b;
}

// Aquí "exportamos" las funciones para que otro archivo las pueda usar
module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir
};