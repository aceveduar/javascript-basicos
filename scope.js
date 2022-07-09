// Existen dos tipos de scope: global y local.
// Lo que esta en local puede acceder a lo que esta en global, pero, lo que esta en global no va a poder acceder a lo que tengo en local.

// Miremos el siguiente ejemplo, la parte global esta definida por la variable miNombre y la parte local pertenece a la variable miApellido que esta dentro de la función. Lo importante es comprender que estoy accediendo a ambos scope desde el llamado de la función nombre().
let miNombre = "Eduardo";

function nombre() {
    let miApellido = "Acevedo";
    console.log(miNombre + " " + miApellido);
}

nombre();



// Miremos donde **no** se puede acceder.
// La variable `miNombre` esta en un scope global y si puedo acceder a esta variable tan solo invocándola en la consola.
miNombre
// Regresa Eduardo

// La variable miApellido esta en un scope local y por lo tanto no puedo acceder a ella desde el scope global. 
miApellido
//Regresa error