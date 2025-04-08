/*Ideas clave

Los valores booleanos pueden ser true o false y pueden ser almacenados en variables de la misma manera que guardamos números o textos.
El operador lógico && nos permite combinar dos o más condiciones. Cada condición individual debe ser verdadera para que la expresión completa sea 
verdadera.
Combinando condiciones con el operador lógico &&
En una sentencia "if", podemos combinar múltiples condiciones utilizando operadores lógicos. En este ejercicio, aprenderemos a utilizar el operador lógico "y" 
para combinar dos o más condiciones.

El operador lógico y se escribe como && y nos permite combinar dos o más condiciones de la siguiente manera: cada condición individual debe ser verdadera para 
que la expresión completa sea verdadera.

Por ejemplo, supongamos que tenemos una situación donde necesitamos evaluar si un puntaje es correcto. Para esto, necesitamos que el puntaje sea mayor a 10 y 
menor a 20:*/


function revisarPuntaje(puntaje) {
  if (puntaje > 10 && puntaje < 20) {
    return "Puntaje correcto";
  }
  return "Puntaje incorrecto";
}

revisaPuntaje(15); /* Puntaje correcto */
revisaPuntaje(5); /* Puntaje incorrecto */
revisaPuntaje(25); /* Puntaje incorrecto */

//En este caso, 5 y 25 son incorrectos porque no cumplen ambas condiciones.

/*Ejercicio

Se pide crear una función llamada revisarEdad que dependa de un parámetro edad. La función debe retornar "Realizar examen" si la edad es mayor que 40 y menor que 50. 
En caso contrario, la función debe retornar "No realizar examen".*/

function revisarEdad (edad){
    if(edad >40 && edad <50){
        return  "Realizar examen"
    }else
        return "No realizar examen"
}

console.log(revisarEdad(45)) // Realizar examen
console.log(revisarEdad(35)) // No realizar examen
console.log(revisarEdad(100)) // No realizar examen