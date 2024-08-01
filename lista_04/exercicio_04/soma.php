<?php
   
    function buscaMaiorValor($valor1, $valor2, $valor3) {
       
        return max($valor1, $valor2, $valor3);
    }
    
   
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      
        $valor1 = $_POST["valor1"];
        $valor2 = $_POST["valor2"];
        $valor3 = $_POST["valor3"];
        
       
        $maiorValor = buscaMaiorValor($valor1, $valor2, $valor3);
        
       
        echo "<h2>O maior valor informado foi:</h2>";
        echo "<p>$maiorValor</p>";
    }