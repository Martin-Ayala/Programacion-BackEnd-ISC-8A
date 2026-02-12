// Ejercicios 1.2.1: Sintaxis básica de Node.js
// Alumno: Martin Adrian Ayala Uc

// 6.a. Integrar la información de cada ejercicio en comentarios en línea o multilínea.

/*
  Esto es un tipo de comentario 
  en multilinea, haciendo que
  el texto sea más legible y organizado
*/


/* 
  6.b. Declaración de todos los diferentes tipos de datos 
  y mostrar sus valores en consola.
*/
console.log("\n6.b.\n");

// 1. String (Cadena de texto)
let tipoString = "Hola Mundo soy Martin";
console.log("Valor String:", tipoString);

// 2. Number (Número: incluye enteros y decimales)
let tipoNumber = 2026;
let tipoFloat = 16.5;
console.log("Valor Numerico (Entero):", tipoNumber);
console.log("Valor Numerico (Decimal):", tipoFloat);

// 3. Boolean (Booleano: verdadero o falso)
let tipoBoolean = true;
console.log("Valor Booleano:", tipoBoolean);

// 4. Undefined (Variable declarada pero sin valor asignado)
let tipoUndefined;
console.log("Valor Indefinido:", tipoUndefined);

// 5. Null (Ausencia intencional de valor)
let tipoNull = null;
console.log("Valor Null:", tipoNull);

// 6. Object (Objeto: colección de datos)
let tipoObject = { materia: "Programación BackEnd", tema: 1 };
console.log("Valor Objeto:", tipoObject);

// 7. Symbol (Identificador único)
let tipoSymbol = Symbol("adrianSimbolo");
console.log("Valor Symbol:", tipoSymbol.toString());

// 8. BigInt (Para números enteros muy grandes)
let tipoBigInt = 9007199254740991n;
console.log("Valor BigInt:", tipoBigInt);


/* 
  6.c. Crear un array con al menos cinco elementos de 
  diferentes tipos de datos.
*/
console.log("\n6.c.\n");

const arrayMix = [
    "holaMundo",       // 1. String
    160,               // 2. Number
    false,             // 3. Boolean
    { cantidad: 10 },         // 4. Object
    null,              // 5. Null
];

console.log("Array con diferentes tipos de datos:", arrayMix);


/* 
  6.d. Escribe una función polinómica de segundo grado que 
  tome dos números y muestre el resultado.
  ---------------------------------------------------
  fórmula: (a + b)² = a² + 2ab + b²
*/
console.log("\n6.d.\n");
function polinomioSegundoGrado(a, b) {
    // a² + 2ab + b²
    let resultado = (a * a) + (2 * a * b) + (b * b);
    console.log(`El resultado del polinomio para a=${a} y b=${b} es:`, resultado);
    return resultado;
}

// Probamos la función (ejemplo: 2 y 3) -> (2+3)² = 25
polinomioSegundoGrado(2, 3);


/*
  6.e. Crea una función flecha que reciba un string y muestre 
  su impresión aplicando algún método de manipulación de cadenas.
*/
console.log("\n6.e.\n");
const manipularCadena = (texto) => {
    // Usamos el método .toUpperCase() para convertir a mayúsculas
    let resultado = texto.toUpperCase(); 
    console.log(`Texto original: "${texto}" | Texto manipulado: "${resultado}"`);
};

// Probamos la función flecha
manipularCadena("aprendiendo backend");


/*
  6.f. Función que implementa un bucle que imprima los 
  números del 1 al 10 en orden descendente.
*/
console.log("\n6.f.\n");
function cuentaRegresiva() {
    console.log("Inicio del bucle descendente del 10 al 1:");
    // El bucle empieza en 10, y mientras sea mayor o igual a 1, resta 1 (i--)
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }
    console.log("Final del bucle");
}

// Ejecutamos la función del bucle
cuentaRegresiva();


/*
  6.g. Crea un objeto que represente un objeto de tu 
  institución con sus respectivas propiedades.
*/
console.log("\n6.g.\n");
// Aquí SOLO creamos el objeto con sus datos básicos
const alumno = {
    nombre: "Martin Ayala",
    carrera: "ISC",
    semestre: 8,
    numeroControl: 2210013
}; 

console.log("Objeto alumno creado:", alumno);


/*
  6.h. Agrega un método al objeto creado anteriormente e 
  imprime una descripción del mismo.
*/
console.log("\n6.h.\n");
// Aquí AGREGAMOS la función al objeto que ya existía arriba
alumno.presentarse = function() {
    return `Soy el alumno ${this.nombre}, estudio ${this.carrera} y voy en el semestre ${this.semestre}.`;
};

// lo imprimimos
console.log(alumno.presentarse());


/*
  6.i. Crea un módulo que contenga funciones matemáticas 
  aritméticas y utilízalo en otro archivo.
*/
console.log("\n6.i.\n");
// importamos el archivo que acabamos de crear
// "./" indica que el archivo está en la misma carpeta
const mates = require('./mat');

console.log("modulo matematico");
console.log("Suma de 10 + 5:", mates.sumar(10, 5));
console.log("Resta de 20 - 8:", mates.restar(20, 8));
console.log("Multiplicación de 4 * 4:", mates.multiplicar(4, 4));
console.log("División de 100 / 2:", mates.dividir(100, 2));


/* 
  6.j. Escribe una función que simule una operación asincrónica 
  utilizando setTimeout y maneje el resultado con un callback.
*/
// Esta función simula, por ejemplo, pedir datos a una base de datos (tarda 2 segundos)
console.log("\n6.j.\n");
function operacionAsincrona(callback) {
    console.log("Iniciando operacion espera 2 segundos");
    
    setTimeout(() => {
        const datos = "Operacion completada con exito!";
        // Llamamos al 'callback' (la función que le pasamos) con el resultado
        callback(datos);
    }, 2000); // 2000 milisegundos = 2 segundos
}

// Usamos la función y le pasamos lo que queremos hacer cuando termine
operacionAsincrona((resultado) => {
    console.log("Resultado recibido:", resultado);
});


/*
  6.k. Escribe un bloque de código que realice la conversión 
  de una cadena a un número e incluye el bloque para el 
  manejo de errores.
*/
console.log("\n6.k.\n");
console.log("Manejo de errores");

const cadenaNumero = "100abc"; // Ejemplo de cadena inválida

try {
    // Intentamos convertir
    const numero = Number(cadenaNumero);

    // En JS, si falla la conversión da NaN (Not a Number), no explota el programa.
    // Para usar el bloque 'catch', verificamos manualmente si es NaN y lanzamos error.
    if (isNaN(numero)) {
        throw new Error("La cadena no es un número válido.");
    }

    console.log("Conversión exitosa:", numero);

} catch (error) {
    // Este bloque se ejecuta si hubo un error arriba
    console.error("Error capturado:", error.message);
} finally {
    // (Opcional) Esto se ejecuta siempre, haya error o no
    console.log("Fin del proceso");
}

