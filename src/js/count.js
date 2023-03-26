const numberElement = document.querySelector('.number');
const realNumber = parseInt(numberElement.getAttribute('data-real-number'));
let number = parseInt(numberElement.textContent);
let isFullyVisible = false;

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            isFullyVisible = true;
        } else {
            isFullyVisible = false;
        }
    });
});

observer.observe(document.querySelector('.number'));

window.addEventListener('scroll', () => {
    if (isFullyVisible && number < realNumber) {
        number++;
        numberElement.textContent = number;
    }
});
