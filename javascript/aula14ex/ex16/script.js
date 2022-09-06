function contar(){
    var inicio = document.getElementById('stringInicio');
    var fim    = document.getElementById('stringFim');
    var passo  = document.getElementById('stringPasso');
    var res    = document.getElementById('res');


    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        //window.alert(`Você deixou algum campo vazio. Preencha e tente novamente.`);
        res.innerHTML = `Impossivel contar!`;
    } else {
        res.innerHTML = `Contando: <br>`;
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if (p <=0){
           window.alert('Passo inválido! Considerando Passo equivalente a 1.');
           p = 1;
        }
        if (i < f){
            //Contagem Crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c}  \u{1F449}`;
            }
        } else {
            //Contagem Decrescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c}  \u{1F449}`;
            }
        }
        res.innerHTML += `\u{1F3C1}`;
        
    }
}
