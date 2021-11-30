function asignar_plazas(contador, plazas) {
    var introducir = prompt("Que vehiculo quieres introducir en el Parking 1:Coche 2:Camion")
    if (introducir != 1 && introducir != 2) {
        alert_output("Vehiculo no reconocido")
    }
    if (introducir == 1 && contador <= 5) {
        plazas.push("Coche")
        contador++
    }
    else if (introducir == 2 && contador <= 4) {
        plazas.push("Camion")
        contador = contador + 2
    }
    else {
        alert_output("No hay espacio en el parking")
    }
    return contador
}


/* 
Hacer funcionar el contador del main
*/