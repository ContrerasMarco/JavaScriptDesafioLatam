/*Ideas clave

En JavaScript, tenemos múltiples herramientas para trabajar con cadenas de texto.

El método substring() nos permite obtener una parte de un string o cadena de texto.
El método toUpperCase() nos permite transformar un texto a mayúsculas.

A continuación, combinaremos el método substring con el método toUpperCase estudiado previamente para obtener un substring en mayúsculas.

Ejercicio

Crea una función llamada primerosCaracteresMayusculas que reciba un párametro texto y devuelva los 5 primeros caracteres del texto en mayúsculas. Para simplificar, asumiremos que el texto siempre tiene al menos 5 caracteres.

Ejemplo*/

primerosCaracteresMayusculas("Hola Mundo") // HOL
primerosCaracteresMayusculas("JavaScript") // JAV

/*Casos de prueba

Puedes revisar los argumentos que ejecutaremos para evaluar tu función:

Test 1	Bye bye
Test 2	Tutoriales
Test 3	Hola Mundo*/

function primerosCaracteresMayusculas (texto){
    string = texto.substring(0,5).toUpperCase();

    return string;
}

console.log(primerosCaracteresMayusculas("Hola Mundo")) // HOL
console.log(primerosCaracteresMayusculas("JavaScript")) // JAV
console.log(primerosCaracteresMayusculas("Bye bye")) // BYE B
console.log(primerosCaracteresMayusculas("Tutoriales")) // TUT
console.log(primerosCaracteresMayusculas("Hola Mundo")) // HOL

