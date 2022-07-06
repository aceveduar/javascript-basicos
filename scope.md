
# Scope

*Existen dos tipos de scope: global y local.*

**Scope Global**: Todo el mundo.

**Scope Local**: Las Vegas, y lo que pasa en las vegas, se queda en Las Vegas.


💡 Lo que esta en local puede acceder a lo que esta en global pero lo que esta en global no va a poder acceder a lo que tengo en local.


Miremos el siguiente ejemplo, la parte global esta definida por la variable `miNombre` y la parte local pertenece a la variable `miApellido` que esta dentro de la función. Lo importante es comprender que estoy accediendo a ambos scope desde el llamado de una función.

```jsx
let miNombre = "Eduardo";

function nombre () {
    var miApellido = "Acevedo";
    console.log(miNombre + " " + miApellido);
}

nombre();
```



Miremos donde no se puede acceder, considerando que me encuentro en un scope global.

`miNombre` esta en un scope global y si puedo acceder a esta variable.


`miApellido` esta en un scope local y por lo tanto no puedo acceder desde el scope global. 

---

👌
