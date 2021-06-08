

var elemtent_pai_inst = document.getElementById("inst");
var divCupomInst = "";

// Trazendo informação das categorias
/*            
            fetch(`http://pblelcoma-final.herokuapp.com/categoria`,
            {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                redirect: 'follow',
                referrerPolicy: 'no-referrer'            
            })
            .then(response => {
                if (!response.ok)
                {
                    throw Error(response.statusText); 
                }

                response.json().then(function(result){

                    for (let index = 0; index < result.length; index++) {
                        var element_pai = document.getElementById("select");
                        var options = document.createElement('option');
                        options.text = result[index].descricao;
                        element_pai.appendChild(options);    
                        options.value = result[index].id;                                          
                    }           
                })

            }).catch(function(error){
                console.log(error);
            })


        function FiltrarPorCategoria(){
            var select = document.getElementById("select").value
            this.Cupons(select);
        }

  */
// Tazendo informações do cupom /cupons/categoria?idCategoria=1&idUsuario=455

var codigoUsuairo = localStorage.getItem("CodSession");

fetch(`http://pblelcoma-final.herokuapp.com/cupons/usuario/${codigoUsuairo}`,
    {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    })
    .then(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }

        response.json().then(function (result) {
            if (result.length == 0) {

                h2 = document.createElement("h2")
                elemtent_pai_inst.appendChild(h2)
                h2.textContent = "Nenhum Cupom encontrado!!!"
            }
            else {
                for (let index = 0; index < result.length; index++) {
                    divCupomInst = document.createElement("div");
                    elemtent_pai_inst.appendChild(divCupomInst);
                    divCupomInst.className = "cupomInst";
                    var h2 = document.createElement("h4");
                    var p = document.createElement("p");
                    divCupomInst.appendChild(h2);
                    divCupomInst.appendChild(p);
                    h2.textContent = result[index].nomeLoja;
                    p.textContent = result[index].titulo + " - " + result[index].descricao + ", no valor de: " + result[index].valor + "%";
                    h2.className = "Pcupom";
                    p.className = "H2cupom";

                }
            }
        })

    }).catch(function (error) {
        console.log(error);
        h2 = document.createElement("h2")
        elemtent_pai_inst.appendChild(h2)
        h2.textContent = "Nenhum Cupom encontrado!!!"
    })


//[MANOEL] função para verificar se os cards exitem, e limpar
/*
function limparCards(){
    console.log(divCupomInst)
    while(divCupomInst != ""  && divCupomInst != null)
    {       
        this.divCupomInst.remove();
        break;
    }

}
*/

window.onload = initPage;

function initPage() {
    calculateGoal();
}

function calculateGoal() {
    fetch(`http://pblelcoma-final.herokuapp.com/notafiscal/totalnotas`,
        {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: {
                "dataCadastro": "2021-06-06 23:00:03",
                "usuario": {
                    "id": 583
                }
            }
        })
        .then(function (res) {
            if (!res.ok) {
                throw Error(res.statusText);
            }
            console.log(res);

            return res;

        })

        .then(function (res) {
            console.log(res);
        })
        .catch(function (error) {
            console.log(error);
        })
    let activateCoupon = true;
    const button = document.querySelector('button');
    button.disabled = activateCoupon;
    let totalGoal = '500,00';
    const totalValueRegistered = '350,00';

    if (totalValueRegistered >= totalGoal) {
        activateCoupon = false;
        button.disabled = activateCoupon;
    }

    let result = (parseFloat(totalValueRegistered) * 100) / parseFloat(totalGoal);

    document.getElementsByClassName('progress-bar').item(0).setAttribute('style', 'width:' + result + '%');
}
