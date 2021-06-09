let lojista = '';

function startToast() {
    Toastify({
        text: `Cupom ${lojista} cadastrado com sucesso!`,
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "rgb(10 187 10)",
        stopOnFocus: true,
        close: true,
        className: "showToast"
    }).showToast();
}
function dismissLoad() {
    setTimeout(function () {
        document.getElementById("loading").style.display = 'none';
    }, 2000);
}
function showNewInvoice() {
    document.getElementById('newInvoice').style.display = "block";
    document.getElementById('preview').style.display = "none";
}
function hiddenNewInvoice() {
    document.getElementById('newInvoice').style.display = "none";
    document.getElementById('preview').style.display = "block";
}
function InserindoNota(content) {
    document.getElementById("loading").style.display = 'block';
    var codigoUsuairo = localStorage.getItem("CodSession")
    var valores = {
        url: content,
        "usuario": {
            "id": codigoUsuairo
        }
    };
    fetch("https://pblelcoma-final.herokuapp.com/notafiscal",
        {
            method: 'post',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(valores),

        })

        .then((res) => res.json())
        .then((result) => {
            lojista = result.nome;
            if(result) {
                startToast();
                dismissLoad();
            }
        }).catch(function (error) {
            console.error(error);
        })
}