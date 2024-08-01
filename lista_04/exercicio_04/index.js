function buscarMaiorValor() {
   
    var valor1 = parseInt(document.getElementById("valor1").value);
    var valor2 = parseInt(document.getElementById("valor2").value);
    var valor3 = parseInt(document.getElementById("valor3").value);
    
   
    var maiorValor = Math.max(valor1, valor2, valor3);
    
   
    document.getElementById("resultado").innerHTML = "<h2>O maior valor informado foi:</h2><p>" + maiorValor + "</p>";
}