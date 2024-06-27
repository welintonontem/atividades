function contarPalavras() {
    var texto = document.getElementById('textInput').value.trim();
  
    
    var palavras = texto.split(/\s+/);
  
    var numPalavras = palavras.length;
    var resultado = document.getElementById('wordCount');
    resultado.innerHTML = "<strong>Número de Palavras:</strong> " + numPalavras;
  }
  