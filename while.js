let estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiante(estudiante){
    console.log(`Hola, ${estudiante}`);
}

while (estudiantes.length > 0){
    console.log(estudiantes);
    let estudiante = estudiantes.shift();
    saludarEstudiante(estudiante);
}

