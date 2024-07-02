// Evento de clique nos botões "Editar"
document.querySelectorAll('.editButton').forEach(function(button, index) {
    button.addEventListener('click', function() {
        // Preenche o formulário com os dados da linha selecionada
        var row = button.parentElement.parentElement;
        document.getElementById('name').value = row.cells[0].textContent;
        document.getElementById('email').value = row.cells[1].textContent;

        // Atualiza o índice de edição para o índice da linha
        editingIndex = index;
    });
});

// Evento de clique no botão "Salvar"
document.getElementById('saveButton').addEventListener('click', function() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();

    // Valida se os campos estão preenchidos
    if (name === '' || email === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Atualiza os dados na linha da tabela
    var userList = document.getElementById('userList');
    var row = userList.rows[editingIndex];
    row.cells[0].textContent = name;
    row.cells[1].textContent = email;

    // Limpa os campos do formulário após salvar os dados
    document.getElementById('userForm').reset();

    // Limpa o índice de edição
    editingIndex = -1;
});

// Evento de clique no botão "Cancelar"
document.getElementById('cancelButton').addEventListener('click', function() {
    // Limpa os campos do formulário
    document.getElementById('userForm').reset();

    // Limpa o índice de edição
    editingIndex = -1;
});
