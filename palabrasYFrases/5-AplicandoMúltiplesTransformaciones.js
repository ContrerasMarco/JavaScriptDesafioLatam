/*Ideas clave

En JavaScript, tenemos múltiples herramientas para trabajar con cadenas de texto.

El método toUpperCase() nos permite transformar un texto a mayúsculas.
El método toLowerCase() nos permite transformar un texto a minúsculas.
El método trim() nos permite eliminar los espacios innecesarios al inicio y al final de una cadena de texto.
Podemos aplicar múltiples transformaciones sucesivas a una cadena de texto.
Aplicando múltiples transformaciones
Es posible combinar múltiples transformaciones. Por ejemplo, podemos limpiar los espacios innecesarios de un texto y luego transformarlo a mayúsculas. 
Para ello:*/

texto = "   hola mundo   "
textoLimpio = texto.trim()
textoMayusculas = textoLimpio.toUpperCase()
console.log(textoMayusculas) // HOLA MUNDO

//También podemos hacer lo mismo en una sola línea:

texto = "   hola mundo   "
console.log(texto.trim().toUpperCase()) // HOLA MUNDO

/*Ejercicio

Crea una función llamada limpiarYMayusculas que reciba dos parámetros, texto y texto2. La función debe retornar un nuevo texto que sea la concatenación de texto y texto2 donde ambos textos estén en mayúsculas y limpios de espacios innecesarios al inicio y al final.

Ejemplo:

limpiarYMayusculas("   hola", "mundo   ") // HOLAMUNDO

Casos de prueba

Puedes revisar los argumentos que ejecutaremos para evaluar tu función:

Test 1	hola, mundo
Test 2	vaso ,agua
Test 3	sal , pimienta*/


function limpiarYMayusculas (texto, texto2){
    string1 = texto.trim().toUpperCase();
    string2 = texto2.trim().toUpperCase();
    stringConcatenado = string1 + string2

    return stringConcatenado
}

console.log(limpiarYMayusculas("   hola", "mundo   ")) // HOLAMUNDO
console.log(limpiarYMayusculas("vaso", " agua")) // VASOAGUA    
console.log(limpiarYMayusculas("sal", " pimienta")) // SALPIMIENTA