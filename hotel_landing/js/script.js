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

const bookingForm = document.getElementById('bookingForm');

bookingForm.addEventListener('submit', function(e){

    e.preventDefault();

    alert('Ваша заявка оставлена. Мы вам перезвоним.');

    const modal = bootstrap.Modal.getInstance(
        document.getElementById('bookingModal')
    );

    modal.hide();

    bookingForm.reset();

});

/* REVIEWS */

document.addEventListener('DOMContentLoaded', () => {

    const reviews = document.querySelectorAll('.review');
    const reviewNext = document.querySelector('.review-next');
    const reviewPrev = document.querySelector('.review-prev');

    let reviewIndex = 0;

    function showReview(index) {

        reviews.forEach(review => {
            review.classList.remove('active');
        });

        reviews[index].classList.add('active');
    }

    if (reviewNext) {

        reviewNext.addEventListener('click', () => {

            reviewIndex++;

            if (reviewIndex >= reviews.length) {
                reviewIndex = 0;
            }

            showReview(reviewIndex);

        });

    }

    if (reviewPrev) {

        reviewPrev.addEventListener('click', () => {

            reviewIndex--;

            if (reviewIndex < 0) {
                reviewIndex = reviews.length - 1;
            }

            showReview(reviewIndex);

        });

    }

});

/* ЗАКАЗ ЗВОНКА */

document.addEventListener('DOMContentLoaded', () => {

    const callForm = document.getElementById('callForm');

    if (callForm) {

        callForm.addEventListener('submit', function(e){

            e.preventDefault();

            alert('Спасибо! Вам скоро перезвонят.');

            const modalElement = document.getElementById('callModal');

            const modal = bootstrap.Modal.getInstance(modalElement);

            if(modal){
                modal.hide();
            }

            callForm.reset();

        });

    }

});

/* КНОПКА НАВЕРХ */

document.addEventListener('DOMContentLoaded', () => {

    const scrollTopBtn =
        document.getElementById('scrollTopBtn');

    if (!scrollTopBtn) return;

    window.addEventListener('scroll', () => {

        if (window.scrollY > 300) {

            scrollTopBtn.style.display = 'flex';

        } else {

            scrollTopBtn.style.display = 'none';

        }

    });

    scrollTopBtn.addEventListener('click', () => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    });

});