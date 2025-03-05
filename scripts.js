
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const menuMobile = document.querySelector('.mobile-nav');

mobileNavToggle.addEventListener('click', (event) => {
    menuMobile.classList.toggle('open');
    event.stopPropagation(); // Impede que o clique se propague para o document
});

document.addEventListener('click', (event) => {
    if (!menuMobile.contains(event.target) && !mobileNavToggle.contains(event.target)) {
        menuMobile.classList.remove('open');
    }
});


function sendWhatsApp(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const mensage = document.getElementById('mensage').value;
    const tel = '5585992781180';

    document.getElementById('name').value = '';
    document.getElementById('mensage').value = '';

    if (name === '' || mensage === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }



    const text = `Olá, meu nome é ${name}, ${mensage}.`;

    const textFormat = encodeURIComponent(text);

    const link = `https://wa.me/${tel}?text=${textFormat}`;
    console.log(link);

    window.open(link, '_blank');
}

