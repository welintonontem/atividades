document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    var formData = {
        name: name,
        email: email
    };

    console.log(JSON.stringify(formData));
});
