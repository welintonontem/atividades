function changeBackgroundColor() {
    // Gerar cores aleatórias em formato hexadecimal
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Alterar a cor de fundo da página
    document.body.style.backgroundColor = randomColor;
  }