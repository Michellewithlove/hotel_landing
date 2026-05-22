const slides = document.querySelectorAll('.slide');
let index = 0;

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

function showSlide(i){
    slides.forEach(s => s.classList.remove('active'));
    slides[i].classList.add('active');
}

next.addEventListener('click', () => {
    index++;
    if(index >= slides.length){
        index = 0;
    }
    showSlide(index);
});

prev.addEventListener('click', () => {
    index--;
    if(index < 0){
        index = slides.length - 1;
    }
    showSlide(index);
});