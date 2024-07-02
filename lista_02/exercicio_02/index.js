document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Limpa mensagens de erro anteriores
    clearErrors();

    // Obtém os valores dos campos do formulário
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();

    // Validação dos campos
    var isValid = true;

    if (name === '') {
        displayError('name', 'Por favor, insira seu nome.');
        isValid = false;
    }

    if (email === '') {
        displayError('email', 'Por favor, insira seu e-mail.');
        isValid = false;
    } else if (!isValidEmail(email)) {
        displayError('email', 'Por favor, insira um e-mail válido.');
        isValid = false;
    }

    if (isValid) {
        var formData = {
            name: name,
            email: email
        };
        console.log(JSON.stringify(formData));
    }
});

function clearErrors() {
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
}

function displayError(field, message) {
    document.getElementById(field + 'Error').textContent = message;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
