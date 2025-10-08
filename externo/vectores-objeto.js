class persona {
    nombre;
    edad;

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

let personas = [new persona("flaco", 30), new persona("loco", 30), new persona("pepe", 15), new persona("flipa", 10)];
let mayor = null;
personas.forEach(per => {
    if (!mayor || per.edad > mayor.edad) {
        mayor = per;
    }
});
let otroMayor = false;
personas.forEach(per => {
    if (per.edad == mayor.edad && per != mayor) {
        otroMayor = true;
    }
})

document.write('La persona de mayor edad es ' + mayor.nombre + ' con ' + mayor.edad + ` y ${otroMayor ? '' : 'NO'} hay otra persona con la misma edad.`);
