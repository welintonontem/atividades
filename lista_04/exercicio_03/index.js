function ehPar(numero) {
    return numero % 2 === 0;
}


function verificarNumero() {
    var numero = document.getElementById("numero").value;
    
   
    var resultado = ehPar(numero);
    
   
    var mensagem;
    if (resultado) {
        mensagem = "O número " + numero + " é par.";
    } else {
        mensagem = "O número " + numero + " é ímpar.";
    }
    
    
    document.getElementById("resultado").textContent = mensagem;
}