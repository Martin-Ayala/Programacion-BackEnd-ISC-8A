//OBJETO JS A JSON
// 1. Objeto normal en JS
const objetoJavaScript = {
    nombre: "Taco de Pollo",
    ingredientes: {
        proteina: "Pollo",
        salsa: "Salsa Verde"
    }
};

// 2. Serializar: Lo convertimos a JSON
const jsonString = JSON.stringify(objetoJavaScript);

//console.log("Este es el texto JSON:");
console.log(jsonString);

//JSON A OBJETO JS
// Cadena JSON
const jsonStringRecibido = '{"nombre":"Taco de Pollo","ingredientes":{"proteina":"Pollo","salsa":"Salsa Verde"}}';

// Deserializar para convertir a objeto JavaScript
const objetoDeserializado = JSON.parse(jsonStringRecibido);

console.log("Objeto:");
console.log(objetoDeserializado);