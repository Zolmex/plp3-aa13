let arr = [];
for (let i = 0; i < 10; i++){
    arr.push(parseInt(1 + Math.random() * 499));
}

let arrCopia1 = [];
for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val < 250) {
        arrCopia1.push(val);
    }
}

let arrCopia2 = [];
for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val >= 250) {
        arrCopia2.push(val);
    }
}

document.write('Tamaño 1er vector: ' + arrCopia1.length);
document.write('<br>');
document.write('Tamaño 2do vector: ' + arrCopia2.length);
document.write('<br>');
document.write('1er Vector:');
document.write('<br>');
for (let i = 0; i < arr.length; i++){
    document.write(arr[i] + ' ');
}
document.write('<br>');
document.write('2do Vector:');
document.write('<br>');
for (let i = 0; i < arrCopia1.length; i++){
    document.write(arrCopia1[i] + ' ');
}
document.write('<br>');
document.write('3er Vector:');
document.write('<br>');
for (let i = 0; i < arrCopia2.length; i++){
    document.write(arrCopia2[i] + ' ');
}
