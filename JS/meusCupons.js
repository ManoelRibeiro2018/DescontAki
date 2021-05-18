// Trazendo informação das categorias
            
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

        
// Tazendo informações do cupom /cupons/categoria?idCategoria=1&idUsuario=455

    function Cupons(select){         
        
        

    fetch(`http://pblelcoma-final.herokuapp.com/cupons/categoria?idCategoria=${select}&idUsuario=${455}`,
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

                var elemtent_pai = document.getElementById("inst");
                var divCupomInst = document.createElement("div");
                divCupomInst.className = "cupomInst";
                elemtent_pai.appendChild(divCupomInst)
                var divTxtCupInst = document.createElement('div');
                div.className = "txtCupInst";
                elemtent_pai.appendChild(divTxtCupInst);
                div.textContent = result[index].descricao;                                         
            }           
        })

    }).catch(function(error){
        console.log(error);
    })

}
        