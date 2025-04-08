/*If anidado parte 3

Ideas clave

Existe un tipo de dato que únicamente se compone de verdaderos y falsos. Este tipo de dato se llama booleano o bool.
Los valores booleanos pueden ser true o false y pueden ser almacenados en variables de la misma manera que guardamos números o textos.
A continuación vamos a volver a realizar un ejercicio similar al anterior, pero en lugar de comparar contra cadenas de texto, vamos a 
comparar contra 
valores booleanos.

Ejercicio

Se busca hacer un asistente que te ayude a revisar todo lo que tienes que llevar antes de salir de casa. Para esto se te pide crear una función que 
se llame revisarAntesDeSalir que depende de dos parámetros llaves y celular,

Si tienes las llaves y el celular, la función debe retornar "Todo listo, puedes salir de casa".
Si tienes solo las llaves, la función debe retornar "Te falta el celular".
Si no tienes las llaves, la función debe retornar "Te falta las llaves".
Los valores que pueden tomar llaves y celular son true o false, donde true significa que tienes el objeto y false que no lo tienes, no se pide considerar 
otros valores.*/

/* Escribe tu código aquí */
function revisarAntesDeSalir (llaves, celular){
    if (llaves == true){
        if (celular == true){
            return "Todo listo, puedes salir de casa"
        }
        if (celular == false){
            return "Te falta el celular"
        }
    }else if (llaves == false){
        return "Te falta las llaves"
    }
}

console.log(revisarAntesDeSalir(true,true));  
console.log(revisarAntesDeSalir(true,false));
console.log(revisarAntesDeSalir(false,true));
console.log(revisarAntesDeSalir(false,false));  




/* Fin */