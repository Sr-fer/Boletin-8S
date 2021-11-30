function salida_vehiculos(contador, plazas) {
    var sacar_coches = prompt("Que vehiculo quieres sacar? 1:Coche 2:Camion")
    if (contador == 0) {
        alert_output("No hay vehiculos en el Parking")
    }
    else {
        if (sacar_coches == 1) {
            var i = plazas.indexOf("Coche")
            plazas.splice(i, 1)
            contador--
        }
        else if (sacar_coches == 2) {
            var j = plazas.indexOf("Camion")
            plazas.splice(j, 1)
            contador = contador - 2
        }
        else {
            alert_output("Valor no válido")
        }
    }
    return contador
}