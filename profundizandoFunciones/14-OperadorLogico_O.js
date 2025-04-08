/*Hasta el momento hemos estudiado los operadores lógicos no ! e y &&.

Existe un tercer operador lógico muy utilizado que es el operador o ||. Este operador devuelve verdadero si al menos una de las condiciones es verdadera. 

Por ejemplo:

function verificarDescuentoPorEdad(edad) {
  if (edad < 12 || edad > 60) {
    return "Califica para descuento";
  }
  return "No califica para descuento";
}

Aquí, basta con que una de las dos condiciones sea verdadera para que la función retorne "Califica para descuento".

Ejercicio
Crea una función llamada verificarPuntaje que dependa de un parámetro puntaje. La función debe retornar "Califica para bono" si el puntaje es mayor que 90 o 
menor que 10. En caso contrario, la función debe retornar "No califica para bono".*/


function verificarPuntaje (puntaje){
    if (puntaje < 10 || puntaje > 90){
        return "Califica para bono"
    } else{
        return "No califica para bono"
    }
}

console.log(verificarPuntaje(60))
console.log(verificarPuntaje(9))
console.log(verificarPuntaje(95))