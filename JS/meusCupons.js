var cup1 = 0
var cup2 = 0
var cup3 = 0
var cup4 = 0

function ativar(btn){
    btn.innerHTML = `Ativo`
    btn.style.backgroundColor ='rgb(54, 53, 53)'
    btn.style.paddingRight ='0.8rem'
    btn.style.paddingLeft ='0.7rem'

    if(btn == btnAtiv1 && cup1 == 0){
        mostrarCupom(numCupom1)
        cup1++
    } else if(btn == btnAtiv2 && cup2 == 0){
        mostrarCupom(numCupom2)
        cup2++
    } else if(btn == btnAtiv3 && cup3 == 0){
        mostrarCupom(numCupom3)
        cup3++
    } else if(btn == btnAtiv4 && cup4 == 0){
        mostrarCupomMissao(numCupom4)
        cup4++
    }
}

function mostrarCupom(numCupom){
    numCupom.style.display = 'block'
    numCupom.innerHTML = `Utilize o código: CYD - ${Math.floor(Math.random()*10000)}`

}

function mostrarCupomMissao(numCupom){
    numCupom.style.display = 'block'
    numCupom.innerHTML = `Utilize o código: CYD - ${Math.floor(Math.random()*10000)}`
}


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


function FiltrarCupom(){

    var select = document.getElementById("select").value
    console.log(select);

    //TODO - IMPLEMENTAR FECT
}
