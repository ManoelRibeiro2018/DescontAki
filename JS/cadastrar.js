cadastrar.addEventListener('click', () => {
    let cpf = document.getElementById("CPF").value
    var senha = document.getElementById("senha").value
    let senhaConf = document.getElementById("confirmarSenha").value

    if(senha == senhaConf){
    localStorage.setItem('cpf', cpf)
    cpf = cpf.replace("-","").replace(".","").replace(".","") 
    var valores = {
        cpf: cpf,
        senha: senha
    };
  
    fetch("http://pblelcoma-final.herokuapp.com/usuarios",
        {
            method: 'post',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers:{
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(valores)     
                      
        })
        
        .then(function (res) {
            if(!res.ok){
                throw Error(res.statusText);
            }
            return res;})

        .then(function (res)
         { 
             res.json().then(data => localStorage.setItem("CodSession", data));
             
            window.location.href = "home.html"
        })
        .catch(function(error){

            alert("Esse CPF já possui cadastro. Tente com um novo CPF ou entre com seu CPF e senha. ")

        }) 

    }else{
        alert("Os valores digitados no campo senha não correspondem aos valores digitados na confirmação.")
    }  
}
)