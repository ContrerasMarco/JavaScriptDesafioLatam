/*Ideas clave

Podemos conocer el largo de una cadena de texto utilizando la propiedad length de los strings.

Ejemplo: console.log("Hola Mundo") // 10.

Largo de una cadena texto

El largo de una cadena de texto es la cantidad de caracteres que tiene.

hola -> 4
mundo -> 5

Propiedad length

En JavaScript podemos conocer el largo de una cadena de texto utilizando la propiedad length.

texto = "Hola Mundo"
console.log(texto.length) // 10

Por ejemplo, el texto "Hola Mundo" tiene 10 caracteres. ¡Los espacios también cuentan como caracteres!

Ejercicio

Crea una función llamada largoTexto que reciba dos parámetros, texto y texto2. La función debe retornar la suma de los largos de texto y texto2.

Ejemplo:

largotexto("Hola", "Mundo") // 9
largotexto("Passport", "1234567890") // 18

Casos de prueba

Puedes revisar los argumentos que ejecutaremos para evaluar tu función:

Test 1	hola,mundo
Test 2	dia,noche
Test 3	javascript,sqlite*/


function largoTexto (texto,texto2){
    string1 = texto.length;
    string2 = texto2.length;
    countString = string1 + string2;

    return countString;
}

console.log(largoTexto("Hola", "Mundo")) // 9
console.log(largoTexto("Passport", "1234567890")) // 18
console.log(largoTexto("hola", "mundo")) // 9