// Creamos array de estudiantes
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

// Tarea que va a hacer el loop
function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

// Loop se va a reperir simpre que el index sea menor a la longitud del array 
for (let i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]); // esto es el aargimento que se le va a pasar al parametro estudiente.
}


var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for (var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}