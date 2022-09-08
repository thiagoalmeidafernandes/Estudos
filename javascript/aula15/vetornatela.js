let valores = [8, 1, 3, 6, 4, 0, 2];
valores.sort() //rearranja os valores nas posições em ordem crenscente

//console.log(valores); //maneira não formatada
/* //maneira burra
console.log(valores[0]);
console.log(valores[1]);
console.log(valores[2]);
console.log(valores[3]);
console.log(valores[4]);
console.log(valores[5]);
console.log(valores[6]);
*/

//maneira personalizada - 1

/*for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

//maneira personalizada - simplificada
for (let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}