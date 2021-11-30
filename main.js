function main() {
    var parking = prompt("Quieres utilizar el parking? 1:Si 2:No")
    var plazas = []
    var contador = 0
    alert("El parking tiene 6 plazas, los coches ocupan 1 y los camiones 2")
    do {
        (isRunning = true)
        if (parking == 1) {
            var menu = prompt("Que quieres hacer? 1:Introducir 2:Sacar 3:Comprobar 4:Salir")
        }
        if (menu == 1) {
            contador = asignar_plazas(contador, plazas)
        }
        if (menu == 2) {
            contador = salida_vehiculos(contador, plazas)
        }
        if (menu == 3) {
            alert_output("Vehiculos en el parking" + "\n" + plazas)
        }
        if (menu == 4) {
            return main()
        }

        if (parking == 2) {
            isRunning = false
            alert_output("Que tenga un buen día!")
        }

    }
    while (isRunning)
}

main()

