/*Ideas clave

Los valores booleanos pueden ser true o false y pueden ser almacenados en variables de la misma manera que guardamos números o textos.
El operador de negación, representado por el símbolo !, invierte el valor de verdad de una expresión.
!true es igual a false y !false es igual a true.
El operador de negación
El operador de negación, representado por el símbolo !, invierte el valor de verdad de una expresión. Si la expresión es verdadera, el operador la convierte 
en falsa; y si la expresión es falsa, el operador la convierte en verdadera.

Veamos el operador en acción:*/

a = true
console.log(!a) // false
console.log(!!a) // true
console.log(!!!a) // false
console.log(!!!!a) // true

b = false
console.log(!b) // true

console.log(!false) // true
console.log(!true) // false

/*Ejercicio

Crea una función llamada llevarLaContraria que dependa de un parámetro expresion. La función debe retornar el valor contrario de la 
expresión.*/

function llevarLaContraria (expresion){
    return !expresion
}

console.log(llevarLaContraria(false))