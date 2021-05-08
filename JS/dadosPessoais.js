let cpf = document.getElementById('cpf')
let nome = document.getElementById('nome')
let email = document.getElementById('email')
let nascimento = document.getElementById('nascimento')
let M = document.getElementById('M')
let F = document.getElementById('F')

function preencherCampos(){
    let cpfSalvo = localStorage.getItem('cpf')
    let nomeSalvo = localStorage.getItem('nome')
    let emailSalvo = localStorage.getItem('email')
    let nascimentoSalvo = localStorage.getItem('nascimento')
    let sexoSalvo = localStorage.getItem('sexo')

    cpf.value = cpfSalvo
    
    if(nomeSalvo != ''){
        nome.value = nomeSalvo
    } 
    if(emailSalvo != ''){
        email.value = emailSalvo
    } 
    if(nascimentoSalvo != ''){
        nascimento.value = nascimentoSalvo
    }
    if(sexoSalvo != ''){
        if(sexoSalvo == 'M'){
            document.getElementById("M").checked = true
        } else if(sexoSalvo == 'F'){
            document.getElementById("F").checked = true
        }

    }
}

function salvarDados(){

    localStorage.setItem('nome', nome.value)
    localStorage.setItem('email', email.value)
    localStorage.setItem('nascimento', nascimento.value)
    localStorage.setItem('fecharPersonalizar', 1)

    alert('Suas alterações foram realizadas com sucesso!')
}

function voltar(){
    window.history.back()
}

function limparDados(){
    localStorage.setItem('nome', '')
    localStorage.setItem('email', '')
    localStorage.setItem('nascimento', '')
    localStorage.setItem('sexo', '')
    location.reload()    
}
