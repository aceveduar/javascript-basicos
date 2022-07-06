var estudiantes = ["Maria","Sergio","Rosa","Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for (var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}