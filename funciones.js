// Funciones declarativas
// Utilizan la palabra reservada function al inicio para poder declarar la función: 
function miFuncion() {
    return 3;
}

miFuncion();


// Funciones de expresión o funciones anónimas
// La declaración se inicia con una variable que va a guardar una función anónima. Se llama función anónima porque no le ponemos un nombre a la función.
const miFuncion = function () {
    return a + b;
}

miFuncion();


// Uso de parámetros
// Podemos pasar parámetros (variables) a la función y hacer, por ejemplo, operaciones con estos parámetros.
const miFuncion = function (a, b) {
    return a + b
}

miFuncion();


// Template strings
function saludarEstudiante(estudiante) {
    console.log(`Hola ${estudiante}`)
}


// Return
// ¿Cómo puedo sin el console.log obtener resultados de una función? Lo hacemos con return.
function sumar(a, b) {
    let resultado = a + b;
    return (`La suma de a + b es: ${resultado}`);
}