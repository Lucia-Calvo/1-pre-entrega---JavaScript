function TurnosOroño () {
  console.log("Bienvenidos a Turnos Oroño")
}


for (let i = 1; i <= 10; i++){
  let nombre = prompt("Ingrese su Nombre y Apellido")
  while(nombre == ""){
    alert("Por favor complete este campo")
    nombre = prompt ("Ingrese su Nombre y Apellido")
  }
  let especialidad = prompt("Ingrese su campo de atención")
  while(especialidad == ""){
    alert("Por favor complete este campo")
    especialidad = prompt ("Ingrese su campo de atención")
  }
  alert ("Turno Nº" + " " + i + " " + "Nombre:" + " " + nombre + ", Campo:" + " " + especialidad)
  if (i <= 3) {
    alert("El tiempo promedio de espera es de 5 minutos")
  } else if (i <= 6) {
    alert("El tiempo promedio de espera es de 10 minutos")
  } else if (i <= 10){
    alert("El tiempo promedio de espera es de 15 minutos")
  }
  
}


TurnosOroño()