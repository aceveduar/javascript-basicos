// Coerción implícita: es cuando el lenguaje nos ayuda y cambia de un tipo de valor a otro tipo de valor.
// Coerción explicita: es la forma en la que nosotros obligamos a que un valor de un tipo cambie a otro valor de otro tipo.


// En este ejemplo lo que esta ocurriendo es una concatenación, el numero 4 se esta juntando con el String “7” formando por defecto un valor de tipo cadena que es “47”.
4 + "7" // Regresa '47'


// En este ejemplo lo que esta ocurriendo es que al multiplicar el número 4 por la cadena “7” si que me esta multiplicando como si se tratase de dos números.
4 * "7" // Regresa 28


// Cuando concatenamos un numero y alguna cadena este valor nuevo por defecto será cadena.
// let a = 28;
// let b = "";

// c = a + b;
// console.log(c)

// typeof (c); // Regresa 'string'

// Queremos que el número veinte se convierta en un string sin que tengamos que concatenarlo, eso lo hacemos con el metodo String que tenemos marcado en amarillo y lo que hace es hacer una coerción explicita.
let a = 20;
let b = "";

let c = a + b;

console.log(c);

let d = String(a);

typeof (a); // Regresa 'number'
typeof (d); // Regresa 'string'


// ¿Ahora como hacemos para que ese 20 se convierta de un string a un número? de la siguiente manera usando el mismo metodo Number.
let e = Number(d);
typeof (e); // Regresa 'number'


// Esto pasa en la vida real, por ejemplo, cuando estamos trabajando en una página web y en los formularios que usamos los imputs, cada que el usuario agregue un valor en ese imput por ejemplo algún valor de número, este número lo va a regresar JavaScript como si fuera una cadena y si queremos hacer algún tipo de operación tenemos que obligar este String a que se convierta a número.






















