
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

localStorage.clear()
const saveButton = document.getElementById('submitButton');
saveButton.addEventListener('click', function (event) {
    event.preventDefault();

    let existingCards = JSON.parse(localStorage.getItem('cards')) || [];

    let newCard = {
        to: document.getElementById('to').value,
        from: document.getElementById('from').value,
        title: document.getElementById('title').value,
        subtitle: document.getElementById('subtitle').value,
        message: document.getElementById('message').value
    };

    existingCards.push(newCard);

    localStorage.setItem('cards', JSON.stringify(existingCards));
    console.log(existingCards);

    // const card_to = card_array.elements['to'].value;
    // console.log(card_to);
    
});

