class persona {
    nombre;
    edad;

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

class empresa {
    edadTope = 60;
}

let pers1 = new persona('fulano', 20);
let pers2 = new persona('mengano', 80);
let pers3 = new persona('pablo', 56);
let emp = new empresa();

let cant = 0;
if (pers1.edad <= emp.edadTope){
    cant++;
}
if (pers2.edad <= emp.edadTope){
    cant++;
}
if (pers3.edad <= emp.edadTope){
    cant++;
}

document.write(cant + ' personas están habilitadas para trabajar en la empresa.');