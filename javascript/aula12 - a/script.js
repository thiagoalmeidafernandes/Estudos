var body = window.document.querySelector('body')
body.addEventListener('load', carregar())

function carregar(){
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    var mins = data.getMinutes()
    var secs = data.getSeconds()
    
    
    if (hora < 4) {
        //Boa madrugada
        img.src = 'imagens/madrugada.png'
        document.body.style.background = '#0c1927'
        msg.innerHTML = `Boa Agora são ${hora} horas e ${mins} minutos.<br>Boa madrugada!`
        
    } else if (hora < 12) {
        //Bom dia
        img.src = 'imagens/dia.png'
        document.body.style.background = '#4693c9'
        msg.innerHTML = `Agora são ${hora} horas e ${mins} minutos<br>Bom dia!.`

    } else if (hora < 18) {
        //Boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#f6b18f'
        msg.innerHTML = `Agora são ${hora} horas e ${mins} minutos.Boa Tarde!<br>`

    } else {
        //Boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#234272'
        msg.innerHTML = `Agora são ${hora} horas e ${mins} minutos.<br>Boa noite!<br>`
    }
}