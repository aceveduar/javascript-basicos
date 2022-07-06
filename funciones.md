# Funciones en JavaScript
Hay dos tipos de funciones, declarativas y de expresión.

## Funciones declarativas

En las funciones declarativas, utilizamos la palabra reservada `function` al inicio para poder declarar la función: 

```jsx
function miFuncion (){
    return 3;
}

miFuncion();
```

## Funciones de expresión o funciones anónimas

En la expresión de función, la declaración se inicia con una palabra reservada, donde se generará una variable que guardará una función anónima. Se llama función anónima porque no le ponemos un nombre a la función.

```jsx
const miFuncion = function () {
    return a + b;
}

miFuncion()
```

### Diferencias:

A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.

## Uso de parametros

Le podemos pasar parámetros (variables) a la función y hacer por ejemplo operaciones con estos parámetros.

```jsx

const miFuncion = function (a,b) {
    return a + b
}

miFuncion ()
```


En este ejemplo usamos algo que se llama template strings y sirve para colocar variables dentro de un formato de cadenas de caracteres y respeta los saltos de línea.

```jsx
function saludarEstudiante (estudiante) {
    console.log(`Hola ${estudiante}`)
}
```

¿Cómo puedo sin el console.log obtener resultados de una función? bueno, esto lo hacemos con `return`.

```jsx
function sumar (a,b) {
    let resultado = a + b;
    return (`La suma de a + b es: ${resultado}`);
}
```



👌