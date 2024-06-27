document.getElementById('calcularIdade').addEventListener('click', function() {
    var anoNascimento = document.getElementById('anoNascimento').value;

    var anoAtual = new Date().getFullYear();

    var idade = anoAtual - parseInt(anoNascimento);

    document.getElementById('resultadoIdade').textContent = "Sua idade é: " + idade + " anos";
});