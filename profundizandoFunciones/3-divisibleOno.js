/*Divisible o no?

Ideas clave

El operador resto % nos entrega el resto de la división de dos números y lo podemos utilizar para determinar si un número es divisible por otro número.
Si el resto es 0, significa que el número es divisible exactamente por el divisor.
Revisando divisores con el operador resto
Si bien el operador resto puede ser utilizado para determinar si un número es par o impar, también puede ser utilizado para determinar si un número es 
divisible por otro número. Si el resto de la división de dos números es 0, significa que el número es divisible exactamente por el divisor.

Ejemplos
10 % 5 == 0, entonces 10 es divisible por 5.
10 % 3 == 1, entonces 10 no es divisible por 3.
10 % 2 == 0, entonces 10 es divisible por 2.
10 % 4 == 2, entonces 10 no es divisible por 4.

Ejercicio

Crea una función llamada esDivisible que dependa de dos parámetros: numero y divisor. Si el número es divisible por el divisor, la función debe 
retornar el valor 1, si no, debe retornar el valor 0.

Sólo debes crear la función, si agregas un console.log o muestras algo adicional el sistema lo considerará como error.
*/

function esDivisible (numero,divisor) {
    if (numero % divisor == 0){
        return 1;
    }
    else{
        return 0;
    }
}