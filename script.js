//Find element
const contactForm = document.querySelector('.message');
const sendButton = document.querySelector('#contact-button');

//connect function to button
sendButton.addEventListener('click', sendMessage);

//function to hide form and show message
function sendMessage() {
    contactForm.style.display = 'none';
    alert('Tack för ditt meddelande. Vi återkopplar så fort vi kan.');
}

