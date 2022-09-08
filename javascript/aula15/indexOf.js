let valores = [1, 4, 8]

let pos = valores.indexOf(4)//Qual o index do valor inserido?


if (pos == -1){
    console.log(`O valor não foi encontrado.`)
} else {
    console.log(`O index é o ${pos}`)
}