const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const numberOfSlides = slides.length;
var slideNumber = 0;

// Next Button Function for Images

function next() {
  prevBtn.removeAttribute("disabled");

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slideNumber++;

  if (slideNumber >= numberOfSlides) {
    slideNumber = 0;
  }
  slides[slideNumber].classList.add("active");

  if (slideNumber >= numberOfSlides - 1) {
    nextBtn.disabled = "true";
  }
}

// Previous Button Function for Images
function prev() {
  slides.forEach((slide) => {
    nextBtn.removeAttribute("disabled");

    slide.classList.remove("active");
  });

  slideNumber--;

  if (slideNumber < 0) {
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add("active");

  if (slideNumber == 0) {
    prevBtn.disabled = "true";
  }
}
