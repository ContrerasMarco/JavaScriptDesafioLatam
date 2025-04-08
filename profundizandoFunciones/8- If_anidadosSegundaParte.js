I/*f anidado parte 2

Ideas clave

Una sentencia if puede estar dentro de otra, lo cual se conoce como un if anidado.
El if interior solo es ejecutado si el if exterior es verdadero. Si el if exterior es falso, el if interior no es ejecutado.
Un if anidado puede estar dentro de un else o un else if.
¿Dónde puede ir un if anidado?
El concepto de if anidado se refiere a la posibilidad de colocar un if dentro de otro if. Pero en la práctica, un if anidado puede estar dentro de un if, 
un else if o un else o incluso dentro de otro if anidado u otras estructuras de control de flujo que estudiaremos más adelante.

Veamos un ejemplo:*/

if (condicion1) {
    // Código a ejecutar si la condición 1 es verdadera
    if (condicion2) {
        // Código a ejecutar si la condición 1 y 2 son verdaderas
    }
} else if (condicion3) {
    // Código a ejecutar si la condición 1 es falsa y la condición 3 es verdadera    
    if (condicion4) {
        // Código a ejecutar si la condición 3 y 4 son verdaderas        
    }
}

/*Resolvamos un ejercicio. Una guía turística necesita un sistema para recomendar actividades según el clima y la hora del día. Para esto, el sistema debe 
recomendar actividades según el clima y la hora del día. Si el clima es soleado y es de mañana, se recomienda salir a correr. Si el clima es soleado y es de tarde, 
se recomienda visitar un parque. Si el clima es lluvioso y es de mañana, se recomienda leer un libro. Si el clima es lluvioso y es de tarde, se recomienda karaoke 
en casa. Si el clima tiene otro valor, se mostrará un mensaje de clima no reconocido.*/

clima = "soleado"; 
horaDelDia = "tarde";

if (clima == "soleado") {
    if (horaDelDia == "mañana") {
        console.log("Es un buen momento para salir a correr.");
    } else if (horaDelDia == "tarde") {
        console.log("Perfecto para visitar un parque.")
    } else {
        console.log("Hora del día no reconocida.");
    }
} else if (clima == "lluvioso") {
    if (horaDelDia == "mañana") {
        console.log("Buen momento para leer un libro.");
    } else if (horaDelDia == "tarde") {
        console.log("Karaoke en casa");
    } else {
        console.log("Hora del día no reconocida.");
    }
} else {
    console.log("Clima no reconocido.");
}

/*Analicemos el ejemplo:

Primero definimos variables para el clima y la hora del día.
Si el clima es soleado, evaluamos la hora del día dentro de este bloque
Si el clima es lluvioso, evaluamos la hora del día dentro de este bloque
Finalmente manejamos el caso en que el clima no coincida con ninguna opción reconocida
El if interior solo es ejecutado si el if exterior es verdadero. Si el if exterior es falso, el if interior no es ejecutado.

Ejercicio
Se necesita crear un sistema de descuentos según la cantidad de productos comprados y la hora del día.

Crea una función llamada descuentos que dependa de los parámetros cantidad y hora. La función debe retornar el descuento, que corresponderá al mensaje 
entregado para cada caso. Escribe un conjunto de "if" anidados para determinar la categoría de descuento basada en la cantidad de productos comprados y la 
hora del día:*

"Mañana" y cantidad mayor o igual a 10: Descuento del 25% en la compra matutina.
"Mañana" y cantidad mayor o igual a 5 pero menor que 10: Descuento del 15% en la compra matutina.
"Mañana" y cantidad menor que 3: Sin descuento en la compra matutina.
"Noche" y cantidad mayor o igual a 10: Descuento del 15% en la compra nocturna.
"Noche" y cantidad mayor o igual a 5 pero menor que 10: Descuento del 5% en la compra nocturna.
"Noche" y cantidad mayor o igual a 3 pero menor que 5: Descuento del 3% en la compra nocturna.
"Noche" y cantidad menor que 3: Sin descuento en la compra nocturna.
No muestres los mensajes con console.log, solo retorna el mensaje desde la función. Ten cuidado con las mayúsculas y minúsculas de los mensajes y 
la ortografía. Copia los textos de cada tipo de descuento tal como se muestran en el enunciado para evitar errores */


/* Escribe tu código aquí */
function descuentos (cantidad,hora){
    if (hora == "Mañana"){
        if (cantidad >= 10 ){
            return "Descuento del 25% en la compra matutina."
        }
        else if (cantidad >=5 && cantidad <10 ){
            return "Descuento del 15% en la compra matutina."
        } 
        else if (cantidad  < 3){
            return "Sin descuento en la compra matutina."
        }
    }else if (hora == "Noche"){
        if (cantidad >= 10){
            return "Descuento del 15% en la compra nocturna."
        }
        else if (cantidad >= 5 && cantidad <10){
            return "Descuento del 5% en la compra nocturna."
        }
         else if (cantidad >= 3 && cantidad <5){
            return "Descuento del 3% en la compra nocturna."
         }
         else if (cantidad  < 3){
            return "Sin descuento en la compra nocturna."
         }
    }
}




/* Fin */
console.log(descuentos(10, "Mañana")); // "Descuento del 25% en la compra matutina."
console.log(descuentos(5, "Mañana")); // "Descuento del 15% en la compra matutina."
console.log(descuentos(2, "Mañana")); // "Sin descuento en la compra matutina."
console.log(descuentos(10, "Noche")); // "Descuento del 15% en la compra nocturna."
console.log(descuentos(5, "Noche")); // "Descuento del 5% en la compra nocturna."

