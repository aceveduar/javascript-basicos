//  declaración switch evalúa una expresión, comparando el valor de esa expresión con una instancia case , y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen.

let diaSemana = 6;

switch (diaSemana) {
    case 1: console.log("Lunes");
        break;
    case 2: console.log("Martes");
        break;
    case 3: console.log("Miércoles");
        break;
    case 4: console.log("Jueves");
        break;
    case 5: console.log("Viernes");
        break;
    case 6: console.log("Sabado");
        break;
    case 7: console.log("Domingo");
        break;
    default: console.log("Ingresa un número entre 1 y 7");
};