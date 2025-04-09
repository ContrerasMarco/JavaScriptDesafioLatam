/**Se tiene un menú con tres opciones. Si el usuario elige la opción 1, se imprime "Hamburguesa"; si escoge la opción 2, se imprime "Pizza"; y si opta por la 
opción 3, se imprime "Ensalada". Si el usuario selecciona una opción que no existe, se imprime "Opción inválida".

Si bien este problema puede resolverse con una serie de declaraciones if y else, también podemos emplear una estructura de control llamada switch. 
El switch nos permite ejecutar diferentes bloques de código según el valor de una variable.*/

opcion = 2
switch (opcion) {
  case 1:
    console.log("Hamburguesa");
    break;
  case 2:
    console.log("Pizza");
    break;
  case 3:
    console.log("Ensalada");
    break;
  default:
    console.log("Opción inválida");
}

/*La estructura de control switch comienza con la palabra clave switch, seguida de una expresión entre paréntesis. Dentro de las llaves, se definen varios case, 
cada uno con un valor esperado para la expresión. Si la expresión es igual al valor de algún case, se ejecutará el bloque de código correspondiente a ese case. 
Si no se encuentra ningún case que coincida con el valor de la expresión, se ejecutará el bloque de código que sigue a la palabra clave default.

Ejercicio

Crea una función llamada atencionAlCliente que reciba un número como parámetro:

Si el número es 1, la función debe retornar el mensaje "Contactar a un vendedor".
Si el número es 2, debe retornar "Esperar a ser atendido".
Si el número es 3, debe retornar "Contactar a soporte".
Para cualquier otro número, debe retornar "Opción inválida".*/

function atencionAlCliente (numero){
    switch(numero){
        case 1 :
             return "Contactar a un vendedor";
             break;
        case 2:     
             return "Esperar a ser atendido";
             break;
        case 3 : 
             return  "Contactar a soporte";
             break;
        default :
             return  "Opción inválida";
             break;            
    }
}

console.log(atencionAlCliente (1));
console.log(atencionAlCliente (2));
console.log(atencionAlCliente (3));
console.log(atencionAlCliente (4));
