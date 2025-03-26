/*Ideas clave

La sentencia if se utiliza para ejecutar código si se cumple una condición.
La sentencia if...else se utiliza para ejecutar código si se cumple una condición y otro código si no se cumple.
La sentencia else if se utiliza para evaluar múltiples opciones.
Else if
En ciertos escenarios, es necesario evaluar múltiples opciones. Por ejemplo, al determinar si un número es mayor, menor o igual a otro. 
En estos casos, empleamos la sentencia else if.

Imaginemos que queremos crear una función que adivine nuestro color favorito:*/

/*function adivinaColor(color) {
    if (color == "azul") 
        {
      return "Adiviné, mi color favorito es azul";
    } 
    else if (color == "verde") {
      return "Mi segundo color favorito es verde";
    } 
    else if (color == "rojo") {
      return "Mi tercer color favorito es rojo";
     else {
      return "Estas equivocado, mi color favorito no es " + color;
    }
  }*/

/*Podemos observar que la sentencia else if nos permite evaluar más de una opción. Si la primera condición no se cumple, se evalúa la siguiente condición. 
Si ninguna condición se cumple, se ejecuta el código dentro del bloque else.

En un diagrama de flujo, la sentencia else if se representa de la siguiente manera:


                                                    Inicio

                                                    color

                                                    color == 'azul'  => si   return 'Adiviné, mi color favorito es azul'

                                                    
                                                no                      no                            no
                                               /                        \                              \
                                         color == 'verde'            color == 'rojo'         return 'Estas equivocado, mi color favorito no es ' + color

                                                si                        si                                              fin    
                                                /                          \
            return 'Mi segundo color favorito es verde'         return 'Mi tercer color favorito es rojo'
                                                
                     fin                                                   no          
                                                                          /
                                                                return 'Mi tercer color favorito es rojo'

                                                                                    fin


Ejercicio

Crea una función que se llame adivinaNumero y que dependa de un parámetro numero.

Si el número es 7, la función debe retornar "Adivinaste el número secreto".

Si el número es 6, la función debe retornar "Casi, pero no es el número secreto".

Cualquier otro número debe retornar "Estas equivocado, el número secreto no es " seguido del número que se ingresó. Por ejemplo: Si el número ingresado es 8, 
la función debe retornar "Estas equivocado, el número secreto no es 8". */

/*Pistas:

Puedes utilizar la sentencia else if para evaluar más de una opción.
No olvides que el bloque else se ejecuta si ninguna de las condiciones anteriores se cumple.
Cuida la ortografía y los espacios en los mensajes que retornas. Influyen en la evaluación de los ejercicios.
Casos de prueba. */

function adivinaNumero (numero){
    if(numero == 7){
        return "Adivinaste el número secreto"
    }
    else if (numero == 6){
        return "Casi, pero no es el número secreto"
    }
    else { 
        return `Estas equivocado, el número secreto no es ${numero}`
    }
}


console.log(adivinaNumero(7));
console.log(adivinaNumero(6));
console.log(adivinaNumero(10));