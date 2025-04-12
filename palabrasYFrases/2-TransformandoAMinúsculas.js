/*Ideas clave


En JavaScript, tenemos múltiples herramientas para trabajar con cadenas de texto.

El método toUpperCase() nos permite transformar un texto a mayúsculas.
El método toLowerCase() nos permite transformar un texto a minúsculas.

Transformando a minúsculas

Para trasformar un texto a minúsculas en JavaScript utilizamos el método toLowerCase de los strings. Este método no recibe parámetros y devuelve el 
texto original en minúsculas.*/

texto = "HOLA MUNDO"
console.log(texto.toLowerCase()) // hola mundo

//El resultado de toLowerCase es un nuevo texto, por lo que, si queremos guardar el resultado para usarlo posteriormente, debemos guardarlo en una variable.

texto = "HOLA MUNDO"
textoMinusculas = texto.toLowerCase()
console.log(textoMinusculas) // hola mundo

/*Ejercicio

Crea una función llamada aMinusculasPrimero que reciba dos parámetros, texto1 y texto2. La función debe retornar un nuevo texto que sea la concatenación de texto1 y texto2, en donde texto1 esté transformado a minúsculas y texto2 se mantenga sin transformación.

Ejemplo:

aMinusculasPrimero("HOLA", "MUNDO") // holaMUNDO*/

function aMinusculasPrimero (texto1,texto2){
    string1 = texto1.toLowerCase();
    string2 = texto2;

    stringConcatenado = string1 + string2;

    return stringConcatenado
}

console.log(aMinusculasPrimero("HOLA", "MUNDO")) // holaMUNDO
console.log(aMinusculasPrimero("HOLA", " marco"))   // hola marco
console.log(aMinusculasPrimero("mundo", " bruno")) // mundo bruno   