let slides = document.querySelectorAll('.slide');

function slideAnimate(active) {
    slides[active].classList.add('active');

    slides.forEach((slide) => {
        slide.addEventListener('click', () => {
            clearActive();
            slide.classList.add('active');
        })
    })
}

function clearActive() {
    slides.forEach((item) => item.classList.remove('active'))
}


slideAnimate(0);