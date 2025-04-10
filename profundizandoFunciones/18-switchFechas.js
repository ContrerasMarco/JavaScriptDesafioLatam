//Recordando que el switch tiene la siguiente estructura

opcion = 2
switch (opcion) {
  case 1:
    console.log("Hamburguesa");
    break;
  case 2:
    console.log("Pizza");
    break;
  case 3:
    console.log("Ensalada");
    break;
  default:
    console.log("Opción inválida");
}

/*El siguiente ejercicio te servirá para comparar la estructura de if/else con switch/case.

Ejercicio

Crea una función llamada diaDeHoy que permita obtener el nombre correspondiente al día de hoy. El día de la semana es un número del 0 al 6, donde 0 es Domingo, 
1 es Lunes, 2 es Martes, 3 es Miércoles, 4 es Jueves, 5 es Viernes y 6 es Sábado.

La función recibe un parámentro llamado día.
Crea un bloque de switch para determinar a que nombre corresponde cada valor, por ejemplo, si dia = 0, entonces nombreDia = 'Domingo'
Retorna la variable nombreDia
Si valor es mayor a los entregados por la función fecha, devuelve "Valor inválido"*/

/* Escribe tu código aquí */
function diaDeHoy (dia){
    switch(dia){
      case 0 : 
          return "Domingo";
          break;
      case 1 : 
          return "Lunes";
          break;
      case 2 :
          return "Martes";   
          break;
      case 3 :
          return "Miércoles";
          break;
      case 4 :
          return "Jueves";
          break;
      case 5 :
          return "Viernes";
          break;
      case 6 :
          return "Sabado";
          break
      default:
          return  "Valor inválido"                        
    }     
  
  }

  console.log(diaDeHoy(0)); // "Domingo"
  console.log(diaDeHoy(1)); // "Lunes"
  console.log(diaDeHoy(22)); // "Martes"  
  
  
  
  /* Fin */