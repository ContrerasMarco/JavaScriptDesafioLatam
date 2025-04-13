/*Ideas clave

En JavaScript, tenemos múltiples herramientas para trabajar con cadenas de texto.

El método trim() nos permite eliminar los espacios innecesarios al inicio y al final de una cadena de texto.

Limpiando espacios en un texto

Podemos limpiar los espacios en blanco al inicio y al final de un texto utilizando el método trim().*/

texto = "   hola mundo   "
console.log(texto.trim()) // hola mundo

/*Ejercicio

Crea una función llamada limpiarTexto que reciba dos parámetros, texto y texto2. La función debe retornar un nuevo texto que sea la concatenación de texto y texto2 donde ambos textos estén limpios de espacios innecesarios al inicio y al final.

Ejemplo:

limpiarTexto("   hola", "mundo   ") // holamundo

Casos de prueba

Puedes revisar los argumentos que ejecutaremos para evaluar tu función:

Test 1	hola, mundo
Test 2	vaso , agua
Test 3	sal , pimienta*/

function limpiarTexto (texto,texto2){
    string1=texto.trim();
    string2=texto2.trim();
    stringConcatenado = string1 + string2;
    return  stringConcatenado
}

console.log(limpiarTexto("   hola", "mundo   ")) // holamundo
console.log(limpiarTexto("vaso", " agua")) // vasoagua  
console.log(limpiarTexto("sal", " pimienta")) // salpimienta
console.log(limpiarTexto("   vaso", " agua")) // vasoagua
