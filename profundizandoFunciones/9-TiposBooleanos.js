/*Tipos booleanos

Ideas clave

Existe un tipo de dato que únicamente se compone de verdaderos y falsos. Este tipo de dato se llama booleano o bool.
Los valores booleanos pueden ser true o false y pueden ser almacenados en variables de la misma manera que guardamos números o textos.
Tipos Booleanos
Los valores true y false pertenecen a un tipo especial de datos llamados booleanos. El nombre booleano es en honor al matemático George Boole, quien inventó la 
lógica booleana, un sistema de lógica que solo tiene dos valores posibles: verdadero (true) y falso (false).

Así como el sistema lógico creado por George Boole, los valores booleanos son exclusivamente verdaderos (true) o falsos (false) y pueden ser almacenados en 
variables de la misma manera que guardamos números o textos u otros tipos de datos.*/

a = true
b = false
if (a == true) {
  console.log("a es verdadero")
}
if (a) { /* Esta expresión es equivalente a la anterior */
  console.log("a es verdadero")
}
if (b == false) {
  console.log("b es falso")
}

/*Un detalle importante a observar es que los valores son true y false y no "true" y "false". Los valores true y false son palabras reservadas en JavaScript 
que representan los valores booleanos verdadero y falso, respectivamente. Por otro lado, "true" y "false" son cadenas de texto que representan palabras y no 
valores booleanos.

Ejercicio
Agrega los datos del tipo correspondiente a las variables usuarioRegistrado y usuarioPremium para que el programa funcione correctamente.

El programa funcionando correctamente debería mostrar que el usuario está registrado y que es premium.*/

/* Escribe tu código aquí */
usuarioRegistrado = true /* Agrega el tipo de dato correcto para que funcione el dato debe ser true*/
usuarioPremium = true /* para que le programa funcione debe ser true ,Agrega el tipo de dato correcto */

/* Fin */
if (usuarioRegistrado) {
  console.log("El usuario está registrado")
  if (usuarioPremium) {
    console.log("El usuario es premium")
  }
} else {
  console.log("El usuario no está registrado")
}