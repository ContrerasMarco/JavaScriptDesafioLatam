/*Ideas clave

Los valores booleanos pueden ser true o false y pueden ser almacenados en variables de la misma manera que guardamos números o textos.
El operador lógico && nos permite combinar dos o más condiciones. Cada condición individual debe ser verdadera para que la expresión completa sea 
verdadera.
El operador % nos permite obtener el residuo de una división y es útil para saber si un número es divisible por otro.
Ejercicio de integración
En el siguiente ejercicio, combinaremos lo aprendido en los ejercicios anteriores para resolver un problema típico de programación. Es importante saber que un 
problema puede ser resuelto de muchas formas y tener infinitas soluciones.

Utilizando lo aprendido en los ejercicios anteriores deberás resolver el siguiente problema. ...

Ejercicio

FizzBuzz es un problema clásico de programación que consiste en mostrar una lista de números cuando cumplen ciertas condiciones.

En este ejercicio deberás crear la función fizzBuzz que depende de un parámetro numero. La función debe retornar:

"Fizz" si el número es divisible por 3.
"Buzz" si el número es divisible por 5
FizzBuzz" si el número es divisible por 3 y 5.
En caso de que el número no sea divisible por 3 o 5, debe devolver el mismo número.*/

function fizzBuzz (numero){
    if (numero % 3 == 0 && numero % 5 == 0){
        return "FizzBuzz"
    }
    else if (numero % 5 == 0){
        return "Buzz"
    }
    else  if (numero % 3 == 0){
        return "Fizz" 
    }
    else{
        return `${numero}`
    }
}

console.log(fizzBuzz(15))
console.log(fizzBuzz(5))
console.log(fizzBuzz(3))
console.log(fizzBuzz(10))
console.log(fizzBuzz(22))