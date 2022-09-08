function tabuada(){
    let vazio = document.getElementById('stgnumber');//só para verificar se o campo está vazio
    let num = Number(document.getElementById('stgnumber').value);//Pega o valor do elemento de id="stgnumber" e transforma em número (pois antes era string)
    let tab = document.getElementById('seltab');//Campo onde vai aparecer a tabuada

    if (vazio.value.length == 0){//variavel de nome vazio
        window.alert(`Por favor, digite um número.`);
    } else {
        let c = 1;
        tab.innerHTML = ''//limpa o elemento com id='tab'(select)
        tab.setAttribute('size', '10');//Cria um atributo size no elemento select de valor 10
        while (c <= 10) {
            let option = document.createElement('option');//Cria no documento um elemento option, mas não define onde
            option.text = `${num} x ${c} = ${num*c}`;
            option.value = `tab${c}`;//Saber qual foi o item que foi selecionado - não faz sentido no momento
            tab.appendChild(option);//Define que option vai ser filho do elemento com id="tab"(select)
            c++;//Incrementa o contador

        }
    }  
}
