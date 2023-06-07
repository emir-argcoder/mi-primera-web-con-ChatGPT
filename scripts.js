document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    var nameInput = document.getElementById('name-input');
    var emailInput = document.getElementById('email-input');
    var messageInput = document.getElementById('message-input');

    if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
        alert('Por favor, completa todos los campos');
    } else {
        alert('¡Mensaje enviado correctamente!');
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    }
});