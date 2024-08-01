function swapValues() {
    
    var valorA = parseInt(document.getElementById("valorA").value);
    var valorB = parseInt(document.getElementById("valorB").value);
    
    
    document.getElementById("resultado").innerHTML = "Valores antes da troca: A = " + valorA + ", B = " + valorB + "<br>";
    
    
    var temp = valorA;
    valorA = valorB;
    valorB = temp;
    
   
    document.getElementById("resultado").innerHTML += "Valores após a troca: A = " + valorA + ", B = " + valorB + "<br>";
}