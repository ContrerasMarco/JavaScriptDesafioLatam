/*Ideas clave

Podemos obtener una parte del texto original utilizando el método substring y especificando el índice de inicio y fin de la cadena de texto.

Si no especificamos el segundo parámetro, el substring será hasta el final del texto.
Substring con un solo parámetro
Cuando queremos indicar que un substring es hasta el final del texto, podemos omitir el segundo parámetro.*/

texto = "Hola Mundo"
console.log(texto.substring(2)) // la Mundo

/*En este caso, el 2 indica que queremos extraer desde el tercer caracter en adelante.

Otra opción un poco mas complicada es utilizar el largo del texto para obtener el substring hasta el final.*/

texto = "Hola Mundo"
largo = texto.length
console.log(texto.substring(2, largo)) // la Mundo

/*No es necesario aprender de memoria los métodos y funciones específicas que estamos utilizando, ya que, en algunos casos como este, existe más de una forma de 
resolver el problema. Lo importante es trabajar el razonamiento lógico para abordar y solucionar diferentes desafíos. Con la práctica y el tiempo aprenderás 
cuál es el mejor método para cada situación.

Ejercicio
Crea una función llamada exceptoLosPrimeros que reciba dos parámetros: texto y cantidad. La función debe retornar el texto sin los primeros caracteres, donde la 
cantidad de caracteres a omitir es el segundo parámetro.*/

Ejemplo:

exceptoLosPrimeros("Hola Mundo", 5) // Mundo
exceptoLosPrimeros("Hola Mundo", 2) // la Mundo

/*Casos de prueba

Puedes revisar los argumentos que ejecutaremos para evaluar tu función:

Test 1	Hola Mundo,6
Test 2	Programación en Javascript,8
Test 3	Tutoriales,3*/

function exceptoLosPrimeros (texto,cantidad){
    string1= texto.substring(cantidad);

    return string1;
}

console.log(exceptoLosPrimeros("Hola Mundo", 5)) // Mundo
console.log(exceptoLosPrimeros("Hola Mundo", 2)) // la Mundo    
console.log(exceptoLosPrimeros("Hola Mundo", 6)) // Mundo
console.log(exceptoLosPrimeros("Programación en Javascript", 8)) // n Javascript
console.log(exceptoLosPrimeros("Tutoriales", 3)) // toriales

