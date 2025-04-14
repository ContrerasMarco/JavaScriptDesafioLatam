/*Ideas clave

Un substring es una parte de un string o cadena de texto.
Podemos obtener una parte del texto original utilizando el método substring y especificando el índice de inicio y fin de la cadena de texto.
Substrings
Una parte de un string o cadena de texto se llama substring y podemos obtenerla utilizando el método substring.*/

texto = "Hola Mundo"
console.log(texto.substring(0, 4)) // Hola

/*El método substring depende de dos parámetros: el índice de inicio y el índice de fin. El índice de inicio es el primer carácter que queremos obtener y 
el índice de fin es el primer carácter que NO queremos obtener.

En el ejemplo de substring, estamos obteniendo los caracteres desde el índice 0 hasta el 4, pero sin incluir el 4.

Ejercicio
Crea una función llamada primerosCaracteres que reciba un párametro texto y devuelva los primeros 3 caracteres del texto. Para simplificar, asumiremos 
que el texto siempre tiene al menos 3 caracteres.

Ejemplo:

primerosCaracteres("Hola Mundo") // Hol
primerosCaracteres("JavaScript") // Jav

Casos de prueba

Puedes revisar los argumentos que ejecutaremos para evaluar tu función:

Test 1	Hello
Test 2	Lenguaje
Test 3	Tutoriales*/

function primerosCaracteres (texto){
    string = texto.substring(0,3);

    return string;
}

console.log(primerosCaracteres("Hola Mundo")) // Hol
console.log(primerosCaracteres("JavaScript")) // Jav
console.log(primerosCaracteres("Hello")) // Hel
console.log(primerosCaracteres("Lenguaje")) // Len