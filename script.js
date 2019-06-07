const slider = (slide, pr, nt, sliderDots, dot) => {

  const slides = document.querySelectorAll(slide),
    prev = document.querySelector(pr),
    next = document.querySelector(nt),
    dotsWrap = document.querySelector(sliderDots),
    dots = document.querySelectorAll(dot);
  let slideIndex = 1,
    slideFocus = slides.length;

  const showSlides = (m, n, prev) => {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    if (m > slides.length) {
      slideFocus = 1;
    }
    if (m < 1) {
      slideFocus = slides.length;
    }
    dots.forEach(item => item.classList.remove('dot-active'));
    slides.forEach(item => {
      item.style.display = 'none'
      item.classList.remove('next-slide-in');
      item.classList.remove('next-slide-out');
      item.classList.remove('prev-slide-in');
      item.classList.remove('prev-slide-out');
    });

    dots[slideIndex - 1].classList.add('dot-active');
    if (prev) {
      slides[slideIndex - 1].classList.add('prev-slide-in');
      slides[slideFocus - 1].classList.add('prev-slide-out');      
    } else {
      slides[slideIndex - 1].classList.add('next-slide-in');
      slides[slideFocus - 1].classList.add('next-slide-out');      
    }

    slides[slideIndex - 1].style.display = '';
    slides[slideFocus - 1].style.display = '';
  }
  showSlides(slideFocus, slideIndex);

  const plusSlides = (n, prev) => {
    showSlides(slideFocus = slideIndex, slideIndex += n, prev);
  }

  const currentSlide = n => {
    showSlides(slideFocus = slideIndex, slideIndex = n);
  }

  prev.addEventListener('click', () => {
    plusSlides(-1, true);
  });
  next.addEventListener('click', () => {
    plusSlides(1);
  });

  dotsWrap.addEventListener('click', e => {
    for (let i = 0; i < dots.length + 1; i++) {
      if (e.target.classList.contains('dot') && e.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });
}

slider('.slider-item', '.prev', '.next', '.slider-dots', '.dot');
// module.exports = slider;