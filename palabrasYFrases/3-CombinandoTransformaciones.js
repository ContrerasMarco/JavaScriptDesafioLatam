/*Ideas clave

En JavaScript, tenemos múltiples herramientas para trabajar con cadenas de texto.

El método toUpperCase() nos permite transformar un texto a mayúsculas.
El método toLowerCase() nos permite transformar un texto a minúsculas.

Apliquemos lo aprendido.

Ejercicio

Crea una función llamada transformar que reciba dos parámetros, texto1 y texto2. El primer parámetro debe ser transformado a mayúsculas y el segundo a 
minúsculas. La función debe retornar un nuevo texto que sea la concatenación de texto1 y texto2 sin espacios adicionales entre ambos textos.

Ejemplo:

transformar("hola", "MUNDO") // HOLAmundo

Casos de prueba

Puedes revisar los argumentos que ejecutaremos para evaluar tu función:

Test 1	hola,mundo
Test 2	cat,Dog
Test 3	KING,KONG*/

function transformar (texto1,texto2){
    string1 =texto1.toUpperCase();
    string2 = texto2.toLowerCase();
    stringConcatenado = string1 + string2

    return stringConcatenado;
}

console.log(transformar("hola", "mundo")) // HOLAmundo
console.log(transformar("cat", "Dog")) // CATdog    
console.log(transformar("KING", "KONG")) // KINGkong