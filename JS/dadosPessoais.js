let cpf = document.getElementById("cpf");
let nome = document.getElementById("nome");
let email = document.getElementById("email");
let nascimento = document.getElementById("nascimento");
let sexo = document.getElementsByName("sexo");

let valores = {};
const preencherCampos = () => {

  const preencherComData = (data) => {
    valores = data;
    
    for (const campo in data) {
      if (document.getElementById(campo)) {
        if (data["sexo"] == "m" || data["sexo"] == "M") {
          document.getElementById("M").checked = true;
        } else if (data["sexo"] == "f" || data["sexo"] == "F") {
          document.getElementById("F").checked = true;
        }
        
          document.getElementById(campo).value = data[campo];
          
        }
    }
  };

  fetch(
    `http://pblelcoma-final.herokuapp.com/usuarios/${localStorage.getItem(
      "CodSession"
    )}`,
    {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      redirect: "follow",
      referrerPolicy: "no-referrer",
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      response.json().then((data) => preencherComData(data));
    })
    .catch((e) => console.log("deu erro" + e.message));
};

function salvarDados() {
  
  valores["nome"] = nome.value;
  valores["email"] = email.value;
  valores["nascimento"] = nascimento.value;

  if (sexo[0].checked) {
    valores["sexo"] = "m";
  } else if (sexo[1].checked) {
    valores["sexo"] = "f";
  }

  /*
    localStorage.setItem('nome', nome.value)
    localStorage.setItem('email', email.value)
    localStorage.setItem('nascimento', nascimento.value)
    localStorage.setItem('fecharPersonalizar', 1)
    */

  fetch(`https://pblelcoma-final.herokuapp.com/usuarios/546`, {
    method: "put",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(valores),
  })
    .then(function (res) {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res;
    })

    .then(function (res) {
      console.log(res);
    })
    .catch(function (error) {
      alert(error);
    });

  alert("Suas alterações foram realizadas com sucesso!");
}

function voltar() {
  window.history.back();
}

function limparDados() {
  localStorage.setItem("nome", "");
  localStorage.setItem("email", "");
  localStorage.setItem("nascimento", "");
  localStorage.setItem("sexo", "");
  location.reload();
}