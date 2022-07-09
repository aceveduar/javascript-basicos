// Acceder a todos los elementos del array
let frutas = ["Manzana","Plátano","Cereza","Fresa"];
console.log(frutas);

// Conocer la longitud de mi array
console.log("La longitud de mi array es: " + frutas.length);

// Acceder a un elemento del array
console.log(frutas[2]);

// Añade elementos al final del array.
let masFrutas = frutas.push("Uvas");
console.log(frutas);

// Elimina el último elemento del array.
let ultimo = frutas.pop();
console.log(frutas);

// Agrega un elemento al inicio del array.
let nuevaLongitud = frutas.unshift("Uvas");
console.log(frutas);

// Elimina el primer elemento del array.
let borrarFruta = frutas.shift();
console.log(frutas);

// Ayuda a saber la posición del elemento que le pasemos
let posicion = frutas.indexOf("Cereza");
console.log(posicion);