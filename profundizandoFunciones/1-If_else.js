/*If-Else

Ideas clave
La sentencia if se utiliza para ejecutar código si se cumple una condición.
La sentencia if...else se utiliza para ejecutar un código si se cumple una condición y otro código si no se cumple.
¿Qué es una sentencia?
Una sentencia es una instrucción que le dice al programa qué hacer. Existen distintos tipos de sentencias. if e if..else son dos ejemplos de 
sentencias de control de flujo.

Anteriormente aprendimos a utilizar la sentencia if para ejecutar código si se cumple una condición. Ahora, vamos a aprender la sentencia else 
para ejecutar código si la condición no se cumple.

Veamos un ejemplo:*/

numero = 100
if (numero > 100) {   
  console.log("El número es mayor que 100");
  console.log("El número es: " + numero);
} else {
  console.log("El número no es mayor que 100");
  console.log("El número es: " + numero);
}

/*En este ejemplo, la variable numero tiene un valor de 100. Luego, se evalúa si la variable numero es mayor que 100. Si es así, se ejecuta el 
código dentro del bloque if. Si no es así, se ejecuta el código dentro del bloque else.*/

Ejercicio

/*Crea una función llamada esCorrecto que dependa de un parámetro codigo. Si el código es igual a "1234", la función debe retornar el valor 1, si no, 
debe retornar el valor 0.

Sólo debes crear la función, si agregas un console.log o muestras algo adicional el sistema lo considerará como error.*/

// Solución:

function esCorrecto (codigo){
    if (codigo =="1234"){
        return 1;
    }
    else{
        return 0;
    }
}