class suma {
    valor1;
    valor2;

    cargarvalor1(val) {
        this.valor1 = val;
    }

    cargarvalor2(val) {
        this.valor2 = val;
    }

    retornarresultado() {
        return this.valor1 + this.valor2;
    }
}

let s = new suma();
s.cargarvalor1(10);
s.cargarvalor2(20);
document.write('La suma de los dos valores es: ' + s.retornarresultado());