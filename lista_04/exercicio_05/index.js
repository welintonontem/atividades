document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formCalculoArea');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
       
        const base = parseFloat(document.getElementById('base').value);
        const altura = parseFloat(document.getElementById('altura').value);

       
        function areaQuadrado(base, altura) {
            return base * altura;
        }

        
        const resultado = areaQuadrado(base, altura);

     
        const resultadoFormatado = `A área do quadrado é: ${resultado.toFixed(3)}`;
        document.getElementById('resultado').textContent = resultadoFormatado;
    });
});


