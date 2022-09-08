let num = [5, 8, 2];

console.log(`Nosso vetor é o ${num}`);

num[3] = 8; //Se não tem a posição ele cria

console.log(`Nosso vetor é o ${num}`);

num.push(1); //Cria uma posição nao interessa qual seja e adiciona o valor entre parenteses
 
console.log(`Nosso vetor é o ${num}`);

console.log(`O vetor tem ${num.length} posições.`); //Quantas posições tem o vetor

console.log(`O primeiro valor do vetor é ${num[0]}`);

num.push(2);
num.sort();

console.log(num);

num.sort();
num.push(5);

console.log(`${num}`)



