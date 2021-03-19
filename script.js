const images = document.querySelectorAll('img');
const buttons = document.querySelectorAll('button');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        clearButtons();
        button.classList.add('active');
    })
});

function clearButtons() {
    buttons.forEach(button => button.classList.remove('active'));
}