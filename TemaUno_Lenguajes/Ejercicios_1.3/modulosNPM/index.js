import generateName from 'sillyname';
import { randomSuperhero } from 'superheroes';

//Modernizacion
const nombreAleatorio = generateName();
console.log(`Nombre aleatorio: ${nombreAleatorio}`);


// La ejecutamos y guardamos el nombre
const nombreHeroe = randomSuperhero();
// Lo mostramos en consola
console.log(`Tu superhéroe es: ${nombreHeroe}`);