/*Desde un diagrama

Ideas clave

Un diagrama de flujo es un tipo de diagrama que representa un algoritmo o proceso.
En un ejercicio anterior creamos una función llamada esPar que depende de un parámetro numero. Si el número es par, la función debe retornar el valor 1, 
si no, debe retornar el valor 0.*/

if (numero % 2 == 0) {
  console.log("El número es par");
} else {
  console.log("El número es impar");
}
/*
Luego vimos el diagrama de flujo de este ejemplo.

                  Diagrama de flujo

                  Inicio
                  
                  numero

                numero % 2 == 0
                    
                    no                   si
                    /                     \
console.log('El número es impar')        console.log('El número es par')
            Fin                                      Fin        


En este ejercicio tendrás el diagrama de flujo y deberás escribir el código correspondiente.

Ejercicio

A partir del siguiente diagrama de flujo, escribe el código.


                                        Inicio

                                        language = 'JavaScript'

                                        language === 'JavaScript'
                              
                             No                                               Sí
                            
    console.log('Este proyecto no utiliza JavaScript.')           console.log('Este proyecto utiliza JavaScript.')

                            Fin                                               Fin

Este ejercicio no te pide crear una función, sino escribir el código directamente tal como se muestra en el diagrama de flujo.*/

//Solucion

const language = 'JavaScript'

if (language === 'JavaScript'){
    console.log('Este proyecto utiliza JavaScript.')
}
else{
    console.log('Este proyecto no utiliza JavaScript.')
}