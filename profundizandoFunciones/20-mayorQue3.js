/*Mayor de 3

Este ejercicio puede ser un poco más complicado que los anteriores. Hay más de una solución y puedes usar cualquier método que hayas aprendido hasta ahora.

Ejercicio

Crea una función llamada mayorDeTres que dependa de tres parámetros: a, b y c.

Si a es mayor que b y c, la función debe retornar "El primer número es el mayor".
Si b es mayor que a y c, la función debe retornar "El segundo número es el mayor".
Si c es mayor que a y b, la función debe retornar "El tercer número es el mayor".
Si los tres números son iguales, la función debe retornar "Los tres números son iguales"

Casos de prueba

Puedes revisar los argumentos que ejecutaremos para evaluar tu función:

Test 1	{"stdin1":5, "stdin2":6, "stdin3":1}
Test 2	{"stdin1":9, "stdin2":8, "stdin3":10}
Test 3	{"stdin1":4, "stdin2":3, "stdin3":2}
Test 4	{"stdin1":7, "stdin2":7, "stdin3":7}*/

function mayorDeTres (a,b,c){
    if (a>b && a>c){
        return "El primer número es el mayor"
    }
    else if (b >a && b >c){
        return "El segundo número es el mayor"
    }
    else if ( c > a && c > b){
        return "El tercer número es el mayor"
    }
    else if ( a == b && a == c ){
        return "Los tres números son iguales"
    }
}

console.log(mayorDeTres(5,6,1)) // "El segundo número es el mayor"
console.log(mayorDeTres(9,8,10)) // "El tercer número es el mayor"  
console.log(mayorDeTres(4,3,2)) // "El primer número es el mayor"
console.log(mayorDeTres(7,7,7)) // "Los tres números son iguales"
