function addUser() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();

    if (name === '' || email === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    var newRow = document.createElement('tr');

    var nameCell = document.createElement('td');
    nameCell.textContent = name;

    var emailCell = document.createElement('td');
    emailCell.textContent = email;

    newRow.appendChild(nameCell);
    newRow.appendChild(emailCell);

    var userList = document.getElementById('userList');

    userList.appendChild(newRow);

    document.getElementById('userForm').reset();
}
