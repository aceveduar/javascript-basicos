// Condicional if
// Estructura de una condición if.
if (true) {
    console.log("Hola mundo");
}


// Condicional else if
// Este es un ejemplo de como usar un `else if`, sirve para validar más de una condición.
let edad = 45;

if (edad === 18) {
    console.log("Eres mayor de edad y puedes votar");
} else if (edad > 18) {
    console.log("Puedes votar nuevamente");
} else if (edad < 18) {
    console.log("No puedes votar");
} else {
    console.log("Ingresa un valor valido");
}


// Operador ternario
// Si queremos simplificar un `if` podemos hacerlo con el operador ternario.
let numero = 28;
resultado = numero === 28 ? "Esa es mi edad" : "Es otra cosa";
console.log(resultado);


