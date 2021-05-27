function startToast() {
    console.log('foi')
    Toastify({
        text: "Cupom cadastrado com sucesso!",
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