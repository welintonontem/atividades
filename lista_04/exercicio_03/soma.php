<?php


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $numero = $_POST["numero"];
    
    
    $resultado = ehPar($numero);
    
    
    if ($resultado == 1) {
        echo "<p>O número $numero é par.</p>";
    } else {
        echo "<p>O número $numero é ímpar.</p>";
    }