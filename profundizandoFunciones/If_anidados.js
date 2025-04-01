/*If anidados

Ideas clave

Una sentencia if puede estar dentro de otra, lo cual se conoce como un if anidado.
El if interior solo es ejecutado si el if exterior es verdadero. Si el if exterior es falso, el if interior no es ejecutado.
if anidado
Una sentencia if puede estar dentro de otra, lo cual se conoce como un if anidado. En código se vería de la siguiente manera:*/

if (condicion1) {
    console.log("Código a ejecutar si la condición 1 es verdadera");
    if (condicion2) {
        console.log("Código a ejecutar si la condición 1 y 2 son verdaderas");
    }
}

/*El if interior solo es ejecutado si el if exterior es verdadero. Si el if exterior es falso, el if interior no es ejecutado.

En diagrama de flujo se vería de la siguiente manera:

Sí
Sí
Sí
No
No
¿Condición 1 verdadera?
Mostrar mensaje 1
¿Condición 2 verdadera?
Mostrar mensaje 2
Fin
Ejercicio
Se busca crear un asistente que te ayude a revisar todo lo que tienes que llevar antes de salir de casa. Para esto se te pide crear una función que se 
llame revisarAntesDeSalir que depende de dos parámetros llaves y celular,

Si tienes las llaves y el celular, la función debe retornar "Todo listo, puedes salir de casa".
Si tienes solo las llaves, la función debe retornar "Te falta el celular".
Si no tienes las llaves, la función debe retornar "Te falta las llaves".
Los valores que pueden tomar llaves y celular son 'Si' o 'No', donde 'Si' significa que tienes el objeto y 'No' que no lo tienes, no se pide considerar otros 
valores. 'Si' y 'No' deben ser escritos con la primera letra en mayúscula.

Tip 1: No inventes situaciones adicionales, solo considera las tres opciones mencionadas. Tip 2: Copia y pega los mensajes para evitar errores de tipeo. 
Tip 3: Se pide retornar los mensajes, no mostrarlos con console.log.*/

const si = "Si";
const no = "No";

function revisarAntesDeSalir (llaves, celular){
    if (llaves == "Si"){
        if (celular == "Si"){
            return "Todo listo, puedes salir de casa"
        }
        if (celular == "No"){
            return "Te falta el celular"
        }
    }else if (llaves == "No"){
        return "Te falta las llaves"
    }
}

console.log(revisarAntesDeSalir(si, si)); // "Todo listo, puedes salir de casa"
console.log(revisarAntesDeSalir(si, no)); // "Te falta el celular"
console.log(revisarAntesDeSalir(no, si)); // "Te falta las llaves"
console.log(revisarAntesDeSalir(no, no)); // "Te falta las llaves"