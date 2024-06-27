document.getElementById('verificarIdade').addEventListener('click', function() {
    var idade = document.getElementById('idade').value;

    idade = parseInt(idade);

    if (idade >= 18) {
        document.getElementById('mensagemIdade').textContent = "Você é maior de idade.";
    } else {
        document.getElementById('mensagemIdade').textContent = "Você é menor de idade.";
    }
});
