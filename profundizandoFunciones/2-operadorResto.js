/*Operador Resto
Ideas clave
La sentencia if se utiliza para ejecutar código si se cumple una condición.
La sentencia if...else se utiliza para ejecutar código si se cumple una condición y otro código si no se cumple.
El operador resto % nos entrega el resto de la división de dos números y lo podemos utilizar para determinar si un número es par o impar.
Introducción al operador resto
Una pregunta típica introductoria es determinar si un número es par o impar. Para esto podemos utilizar un operador llamado operador resto
*/
if (numero % 2 == 0) {
  console.log("El número es par");
} else {
  console.log("El número es impar");
}
/*El operador resto % nos entrega el resto de la división de dos números. Si el resto es 0 significa que el número es divisible exactamente por el divisor, y 
por lo tanto, es par y en caso contrario, es impar.*/

/*Ejercicio

Crea una función llamada esPar que dependa de un parámetro numero. Si el número es par, la función debe retornar el valor 1, si no, debe retornar el valor 0.

Sólo debes crear la función, si agregas un console.log o muestras algo adicional el sistema lo considerará como error.*/

function esPar (numero){
    if (numero % 2 == 0){
        return 1;
    }
    else {
        return 0;
    }
}