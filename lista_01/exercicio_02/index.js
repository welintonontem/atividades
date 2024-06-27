
var contador = 0;

var button = document.getElementById('clickButton');

var countDisplay = document.getElementById('clickCount');

button.addEventListener('click', function() {
    contador++;
    countDisplay.textContent = contador + (contador === 1 ? ' clique' : ' cliques');
});
