// Función constructora
function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

// new va a generar una nueva instancia de la función constructora
// una nueva istancia es generar un objeto de deriba de otro objeto
let autoNuevo = new auto ("Tesla","Model 3", 2020)

console.log(autoNuevo);


let autoNuevo2 = new auto ("Tesla", "Modelo X", 2018);
let autoNuevo3 = new auto ("Toyota", "Corola", 2020);

console.log(autoNuevo2);
console.log(autoNuevo3);