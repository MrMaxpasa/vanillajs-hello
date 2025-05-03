import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const culpables =[
    "El veciono", "La abuelita del barrio", "Un repartidor",
    "El fantasma", "Mi ego", "Juan de contabilidad", "Los cazafantasmas",
    "Mi pez", "La aspiradora"
  ];

  const acciones =[
    "se comio la tarea", "me quito las ruedas del coche",
    "elimini todo mi proyecto", "me puso cloroformo en el ambientdor de casa",
    "me rompio el router", "no me desperto", "tiro mi portatil al suelo"
  ];

  const intenciones =[
    "para no tener que entregar el trabajo", "para evitar que fuera a clase",
    "para que no llegara a tiempo", "para que no pudiera presentar el proyecto",
    "para que no enviara el correo", "para que no pudiera participar en la reunión",
    "para poder secuestrame y dejarme encerrado encasa"
  ];

  const momentos =[
    "hace unas horas", "hace unos minitos", "justo hayer",
    "en la noche", "antes de salir", "esta mañana", "en el momento que esta escusa sea creible en algun momento"
  ];

  function genExc(){
    const culpable = culpables[Math.floor(Math.random()*culpables.length)];
    const accion = acciones[Math.floor(Math.random()*acciones.length)];
    const interacio = intenciones[Math.floor(Math.random()*intenciones.length)];
    const momento = momentos[Math.floor(Math.random()*momentos.length)];


    return culpable+" "+accion+" "+interacio+" "+momento+".";
  }

  const excusa = document.getElementById("excusa");
  if(excusa){
    excusa.textContent=genExc();
  }
  else{
    console.log("problema con la excusa, (id no encontrada)");
  }


};
