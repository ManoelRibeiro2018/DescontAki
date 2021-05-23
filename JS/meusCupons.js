

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


    fetch(`http://pblelcoma-final.herokuapp.com/cupons/categoria?idCategoria=${1}&idUsuario=${455}`,
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
            for (let index = 0; index < result.length; index++) 
            {
                console.log(result);
                divCupomInst = document.createElement("div");
                elemtent_pai_inst.appendChild(divCupomInst);
                divCupomInst.className = "cupomInst";
                var h2 = document.createElement("h4");
                var p =  document.createElement("p");
                divCupomInst.appendChild(h2);
                divCupomInst.appendChild(p);
                h2.textContent = result[index].nomeLoja;                  
                p.textContent = result[index].titulo +" - " + result[index].descricao + ", no valor de: "+ result[index].valor +"%";             
                console.log(divCupomInst.className.length <= 0 ); 
                h2.className = "Pcupom";
                p.className = "H2cupom"; 
                
            }           
        })

    }).catch(function(error){
        console.log(error);
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
        