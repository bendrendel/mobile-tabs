const images = document.querySelectorAll('img');
const tabs = document.querySelectorAll('nav li');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        clearTabs();
        tab.classList.add('active');

        clearImages();
        images[index].classList.add('show');
    })
});

function clearTabs() {
    tabs.forEach(tab => tab.classList.remove('active'));
}

function clearImages() {
    images.forEach(image => image.classList.remove('show'));
}