<?php

function swap(&$a, &$b) {
  
    printf("Valores antes da troca: A = %d, B = %d\n", $a, $b);
    
    
    $temp = $a;
    $a = $b;
    $b = $temp;
    
   
    printf("Valores após a troca: A = %d, B = %d\n", $a, $b);
}


$valorA = 5;
$valorB = 10;

swap($valorA, $valorB);


echo "Valores fora da função: A = $valorA, B = $valorB\n";

?>