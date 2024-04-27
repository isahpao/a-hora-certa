let horaPc = new Date()
let minutoPc = new Date()



let horaCerta = horaPc.getHours()
let minutoCerto = minutoPc.getMinutes()

let hora = window.document.getElementById('hora')




let saudacao = window.document.querySelector('img#elemento')
let fundo = window.document.querySelector('body#corpo')

console.log(fundo)

if (horaCerta >= 0 && horaCerta <= 12) 
{ saudacao.src = 'imagens/bomdia.jpg'
fundo.style.background = 'linear-gradient(90deg, rgba(248,255,69,1) 0%, rgba(253,167,29,1) 50%, rgba(234,69,252,1) 100%)'
hora.innerText= `Bom dia! Agora são exatamente ${horaCerta} horas e ${minutoCerto} minutos`
}
else if ( horaCerta > 12 && horaCerta <= 18) 
{ saudacao.src = 'imagens/boatarde.jpg'
fundo.style.background = 'linear-gradient(90deg, rgba(133,211,255,1) 0%, rgba(231,29,253,1) 50%, rgba(62,255,139,1) 100%)'
hora.innerText= `Boa tarde! Agora são exatamente ${horaCerta} horas e ${minutoCerto} minutos`
}
    else { saudacao.src = 'imagens/boanoite.jpg'
fundo.style.background = 'linear-gradient(90deg, rgba(0,142,255,1) 0%, rgba(107,1,194,1) 50%, rgba(0,0,0,1) 100%)'
hora.innerText= `Boa noite! Agora são exatamente ${horaCerta} horas e ${minutoCerto} minutos`
}

