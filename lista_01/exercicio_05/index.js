document.getElementById('botaoEsconder').addEventListener('click', function() {
    var elemento = document.getElementById('elementoParaEsconder');
    elemento.style.display = 'none';
});

document.getElementById('botaoMostrar').addEventListener('click', function() {
    var elemento = document.getElementById('elementoParaEsconder');
    elemento.style.display = 'block';
});
