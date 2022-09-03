//var botao = window.document.querySelector('input#botao')
//botao.addEventListener('click', verificar())


function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if (formAno.value.length == 0 || Number(formAno.value) > ano || Number(formAno.value) < 1900) { 
        //Se o valor no formulario formAno for de tamanho 0 ||ou se o valor digitado no formulario formAno formatado como número for maior do que a variável 'ano' indica (no caso o ano atual pelo getFullYear), retorna o alerta abaixo
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    } else { //senao executa os códigos abaixo
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        res.innerHTML = `Você possui ${idade} anos`
        //var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')

        if (fsex[0].checked) { //se o primeiro fsex estiver marcado
            var genero = 'Homem'

            if (idade < 10) {
                // Criança
                img.setAttribute('src', '../aula12 - a/imagens/madrugada.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', '../aula12 - a/imagens/dia.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', '../aula12 - a/imagens/tarde.png')
            } else {
                //Idoso
                img.setAttribute('src', '../aula12 - a/imagens/noite.png')
            }

        } else if (fsex[1].checked){ //senao se o segundo estiver marcado
            var genero = 'Mulher'

            if (idade < 10) {
                // Criança
                img.setAttribute('src', '../aula12 - a/imagens/madrugada.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', '../aula12 - a/imagens/dia.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', '../aula12 - a/imagens/tarde.png')
            } else {
                //Idoso
                img.setAttribute('src', '../aula12 - a/imagens/noite.png')
            }
        }
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    } 
}