class participante {
    nombre;
    puntos;

    constructor(nombre, puntos) {
        this.nombre = nombre;
        this.puntos = puntos;
    }

    imprimir() {
        alert('Nombre:' + this.nombre + ", Puntos:" + this.puntos);
    }

    aumentarPuntos(puntosExtra) {
        this.puntos += puntosExtra;
    }

    verificarSiGano(){
        if (this.puntos > 1000) {
            alert("El jugador " + this.nombre + " ganó con " + this.puntos + " puntos");
        }
    }
}