
const previewButton = document.getElementById('previewButton');
previewButton.addEventListener('click', function () {
    const input_to = document.getElementById('to').value;
    const input_from = document.getElementById('from').value;
    const input_title = document.getElementById('title').value;
    const input_subtitle = document.getElementById('subtitle').value;
    const input_message = document.getElementById('message').value;

    document.querySelector('span.to-text').innerHTML = input_to
    document.querySelector('span.from-text').textContent = input_from;
    document.querySelector('span.title-text').textContent = input_title;
    document.querySelector('span.subtitle-text').textContent = input_subtitle;
    document.querySelector('span.message-text').textContent = input_message;
});

card_array = document.getElementsByClassName('form-group');

const saveButton = document.getElementById('submitButton');
saveButton.addEventListener('click', function (event) {
    event.preventDefault();

    const card_to = card_array.elements['to'].value;
    console.log(card_to);
    
});

