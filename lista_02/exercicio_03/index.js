document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();

    displayData(name, email);

    document.getElementById('contactForm').reset();
});

function displayData(name, email) {
    var table = document.getElementById('dataTable');

    var tbody = table.getElementsByTagName('tbody')[0];

    var newRow = tbody.insertRow();

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.textContent = name;
    cell2.textContent = email;

    table.style.display = 'table';
}
