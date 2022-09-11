let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = []; //cria o array

function isNumero(n/*equivale ao num.value*/){//função chamada pela função adicionar()
    if (Number(n) >= 1 && Number(n) <= 100){
        return true;
    } else {
        return false;
    }
}

function inLista(n/*equivale ao num.value*/, v/*equivale a valores*/){//função chamada pela função adicionar()
    if (v.indexOf(Number(n)) != -1){
        return true;
    } else {
        return false;
    }
}

function adicionar(){//onclick
    if (isNumero(num.value) && !inLista(num.value, valores)) {//Se for um número entre 1 e 100 && não estiver na lista
        valores.push(Number(num.value));//empurra o número pro array
        let option = document.createElement('option');//criar elemento option dentro do documento
        lista.appendChild(option);//tornar elemento oprion filho de lista(select)
        option.text = `Valor ${num.value} adicionado.`;
       res.innerHTML = '';//quando adicionar algum elemento, se já tiver texto na div res, vai limpar para poder entrar texto novo
        
    } else { //senao
        window.alert('Valor inválido ou já encontrado na lista.');
    }
    num.value = '';//limpa o num
    num.focus();//coloca o cursor em num
}

function finalizar() {//onclick
    if (valores.length == 0) {//se nao tiver nada no array valores
        window.alert('Adicione valores antes de finalizar.');
    } else {//senao
        res.innerHTML = '';//para limpar se o botao finalizar for adicionado duas vezes - tente comentar a linha e experimente
        let total = valores.length
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for (let pos in valores){//para cada posição no array valores - o for incrementa o valor de pos em cada repetição
            soma +=valores[pos];//soma = soma + valores[pos]
            if (valores[pos] > maior){//se o valor da posição for maior que o da posição anterior
                maior = valores[pos];//a variavel maior se torna essa posição portanto
            }
            if (valores[pos] < menor){//se o valor da posição for menor que o da posição anterior
                menor = valores[pos];//a variavel maior se torna essa posição portanto
            }
        }//olha essa poha no depurador do dev tools que você entende

        media = soma / total
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`;
        res.innerHTML += `<p>A média de todos os valores digitados é ${media}.</p>`

    }
}