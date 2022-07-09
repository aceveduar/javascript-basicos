// Sucede cuando las variables y las funciones se declaran antes de que se procese cualquier tipo de código. 
// Solo pasa con versiones anteriores de ECMAScript 5 hacia abajo porque solo sucede con dos palabras clave `var` y `function`. 
// ECMAScript 6 en adelante usamos `const` y `let` permitiendo que no suceda el hoisting.

// Ejemplo donde sucede el hoisting
// Lo que cucede es que el motor del navegador lee primero lo que hay dentro del console.log y ve que se trata de una variable, entonces la guarda, pero como no tiene un valor le coloca por default undefined.
console.log(miNombre);
var miNombre = "Eduardo";


// Miremos otro ejemplo pero con una función.
// Si llamamos una función antes de declararla si vamos a tener el resultado que nosotros esperábamos siempre y cuando las variables estén declaradas e inicializadas antes de mandar a llamar esa función, pero por buenas practicas primero se declara y luego se manda llamar a la función.
hola();
function hola() {
    console.log("Hola mundo");
}