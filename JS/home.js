let nome = localStorage.getItem('nome')
let h1 = document.getElementsByTagName('h1')[0]

function carregarPersonalizacoes(){
    
    imprimirNome()
    if(localStorage.getItem('fecharPersonalizar') == ''){
        personalizar.style.display = 'block'
    }  
}

function imprimirNome(){
    if(nome != '' && nome != null){  
        h1.innerHTML = `Seja Bem-Vindo(a), <span>${nome}</span> !`
    }   
}

function fecharBalao(){
    let personalizar = document.getElementById('personalizar')
    personalizar.style.display = 'none'
    localStorage.setItem('fecharPersonalizar', 1)
}

function salvarNome(){
    let nome = document.getElementById('inputRespNome')  
    let divRespNome = document.getElementById('respostaNome')  
    let divRespNasc = document.getElementById('respostaNascimento')  

    if(nome.value !='' ){
        localStorage.setItem('nome', nome.value)
        divRespNome.style.display = 'none'
        divRespNasc.style.display = 'block'
    } else {
        alert('Os dados precisam ser preenchidos para serem salvos.')
    }
}

function salvarNasc(){
    let nascimento = document.getElementById('inputRespNasc')  
    let divRespNasc = document.getElementById('respostaNascimento') 
    let divRespSexo = document.getElementById('respostaSexo')  

    if(nascimento.value !=''){
        localStorage.setItem('nascimento', nascimento.value)
        divRespNasc.style.display = 'none'
        divRespSexo.style.display = 'block'
    } else {
        alert('Os dados precisam ser preenchidos para serem salvos.')
    }
}

function salvarSexoMasc(){
    let divRespSexo = document.getElementById('respostaSexo')  
    let divRespEmail = document.getElementById('respostaEmail')

    localStorage.setItem('sexo','M')
    divRespSexo.style.display = 'none'
    divRespEmail.style.display ='block'  
    
}

function salvarSexoFem(){
    let divRespSexo = document.getElementById('respostaSexo') 
    let divRespEmail = document.getElementById('respostaEmail')

    localStorage.setItem('sexo','F')
    divRespSexo.style.display = 'none'
    divRespEmail.style.display ='block'
}

function salvarEmail(){
    let email = document.getElementById('inputRespEmail')
    let divRespEmail = document.getElementById('respostaEmail')
    let divMsgFinal = document.getElementById('divMsgFinal')
    let cabecalho =document.getElementById('cabecalhoPersonalizar')

    if(email.value !=''){
        localStorage.setItem('email', email.value)
        divRespEmail.style.display ='none'
        cabecalho.style.display = 'none'
        divMsgFinal.style.display ='block'
        localStorage.setItem('fecharPersonalizar', 1)
    } else {
        alert('Os dados precisam ser preenchidos para serem salvos.')
    }
}





