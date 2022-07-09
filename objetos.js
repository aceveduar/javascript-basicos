// Sintaxis de un objeto
// let miAuto = {
//     marca: "Toyota",
//     modelo: "Carola",
//     annio: 2020
// };

console.log(miAuto);


// Podemos crear funciones dentro del objeto:
let miAuto = {
    marca: "Toyota",
    modelo: "Carola",
    annio: 2020,
    detalleDelAuto: function () {
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

miAuto.detalleDelAuto();


// this
// Es una variable que hace referencia al objeto, en el ejemplo hace referencia a su padre que es el objeto `miAuto` que se traduce a:
// miAuto .modelo y me trae carolla.
// miAuto .annio y me trae 2020.