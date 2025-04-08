/*Utilizando el operador ternario podemos asginar un valor a una variable dependiendo de una condición.

edad = 18
mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad"

En este código, la variable edad tiene un valor de 18. Luego, se evalúa si la variable edad es mayor o igual a 18. Si es verdadero, se 
asigna el mensaje "Eres mayor de edad" a la variable mensaje, de lo contrario, se asigna "Eres menor de edad".

Podemos lograr lo mismo con un if normal:*/

edad = 18
if (edad >= 18) 
  mensaje = "Eres mayor de edad"
else
  mensaje = "Eres menor de edad"

/*Ejercicio

El siguiente código no funciona como debería. El código correcto es 1234, pero el programa muestra "Código incorrecto".

¿Puedes corregirlo?*/

codigo = "1234"
/* Escribe tu código aquí */

mensaje = codigo == "1234" ? "Código correcto" : "Código Incorrecto"
console.log(mensaje)


/* Fin */