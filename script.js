const images = document.querySelectorAll('img');
const buttons = document.querySelectorAll('button');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        clearButtons();
        button.classList.add('active');

        clearImages();
        images[index].classList.add('show');
    })
});

function clearButtons() {
    buttons.forEach(button => button.classList.remove('active'));
}

function clearImages() {
    images.forEach(image => image.classList.remove('show'));
}