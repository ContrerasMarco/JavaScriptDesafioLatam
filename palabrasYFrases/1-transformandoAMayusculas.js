/*Transformando a mayúsculas

Ideas clave

En JavaScript, tenemos múltiples herramientas para trabajar con cadenas de texto.
El método toUpperCase() nos permite transformar un texto a mayúsculas.
Cadenas de texto
Las cadenas de texto, o strings en inglés, son el tipo de dato que se utiliza para representar texto en JavaScript. Las cadenas de texto se pueden 
definir utilizando comillas simples o dobles.*/

a = "hola"
b = 'mundo'

/*A lo largo de los siguientes ejercicios, trabajaremos con cadenas de texto y aprenderemos a manipularlas y transformarlas.

Transformando a mayúsculas

Para transformar una cadena de texto a mayúsculas, utilizaremos el método toUpperCase() que nos proporciona JavaScript.

El concepto de método es muy importante en JavaScript y no lo hemos estudiado previamente, pero por ahora podemos entenderlo como una función que se 
aplica a un tipo de dato en particular. Por ejemplo, el método toUpperCase() es un método que no recibe parámetros y se aplica a los textos, devolviéndonos el 
texto original en mayúsculas. Estudiaremos más a fondo los métodos en el futuro.*/

texto = "hola mundo"
console.log(texto.toUpperCase()) // HOLA MUNDO

//El resultado de toUpperCase es un nuevo texto, por lo que, si queremos guardar el resultado para usarlo posteriormente, debemos guardarlo en una variable.

texto = "hola mundo"
textoMayusculas = texto.toUpperCase()
console.log(textoMayusculas) // HOLA MUNDO

/*Ejercicio

Crea una función llamada aMayusculas que reciba dos parámetros, texto1 y texto2. La función debe retornar un nuevo texto que sea la concatenación de texto1 y texto2 en mayúsculas, sin espacios adicionales entre ambos textos.

Ejemplo:

aMayusculas("hola", "mundo") // HOLAMUNDO**/

function aMayusculas (texto1, texto2){
    string1 = texto1.toUpperCase();
    string2 = texto2.toUpperCase();
    stringConcatenado = string1 + string2;
    return stringConcatenado;
}

console.log(aMayusculas("hola", "mundo")) // HOLAMUNDO
console.log(aMayusculas("hola", " marco"))
console.log(aMayusculas("mundo", " bruno"))