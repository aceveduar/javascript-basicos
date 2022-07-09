// Con la función constructora vamos a generar un template de un objeto donde vamos a generar sus propiedades y sus parámetros y después vamos a poder hacer nuevas instancias con un operador especial.

// Función constructora
function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

let autoNuevo = new auto("Tesla", "Model 3", 2020)

console.log(autoNuevo);


// new va a generar una nueva instancia de la función constructora
// Una nueva instancia es generar un objeto de deriva de otro objeto
// Creemos más ejemplos
let autoNuevo2 = new auto("Tesla", "Modelo X", 2018);
let autoNuevo3 = new auto("Toyota", "Corola", 2020);