document.addEventListener("DOMContentLoaded", function () {
  renderSlider(".slider");
});

const nextSlide = () => {
  let activeSlide = document.querySelector(".slide--active");
  let nextSlide = activeSlide.nextElementSibling;
  if (nextSlide) {
    activeSlide.classList.remove("slide--active");
    nextSlide.classList.add("slide--active");
    renderSlides();
    renderBtns();
  }
};

const prevSlide = () => {
  let activeSlide = document.querySelector(".slide--active");
  let prevSlide = activeSlide.previousElementSibling;
  if (prevSlide) {
    activeSlide.classList.remove("slide--active");
    prevSlide.classList.add("slide--active");
    renderSlides();
    renderBtns();
  }
};

const updateButtonState = (prevBtn, nextBtn) => {
  let activeSlide = document.querySelector(".slide--active");
  let prevSlide = activeSlide.previousElementSibling;
  let nextSlide = activeSlide.nextElementSibling;

  prevSlide
    ? prevBtn.classList.remove("disabled")
    : prevBtn.classList.add("disabled");
  nextSlide
    ? nextBtn.classList.remove("disabled")
    : nextBtn.classList.add("disabled");
};

const updateTestimonialButtons = () => {
  let activeSlide = document.querySelector(".slide--active");
  let activeSlideIndex = activeSlide.getAttribute("data-slide");

  document.querySelectorAll(".testimonial-button").forEach((button) => {
    button.classList.remove("active-testimonial-button");
    if (button.getAttribute("data-slide") === activeSlideIndex) {
      button.classList.add("active-testimonial-button");
    }
  });
};

const renderBtns = () => {
  let nextBtn = document.querySelector("#forvard");
  let prevBtn = document.querySelector("#back");
  let nextBtnMob = document.querySelector("#forvardMob");
  let prevBtnMob = document.querySelector("#backMob");

  updateButtonState(prevBtn, nextBtn);
  updateButtonState(prevBtnMob, nextBtnMob);
  updateTestimonialButtons();
};

const renderSlides = () => {
  let slides = document.querySelectorAll(".slide");
  if (!slides) return;

  let activeSlide = document.querySelector(".slide--active");
  if (!activeSlide) {
    activeSlide = slides.item(0);
    activeSlide.classList.add("slide--active");
  }

  slides.forEach((slide) => {
    slide.classList.remove("prev", "next");
  });

  let prevSlide = activeSlide.previousElementSibling;
  if (prevSlide) prevSlide.classList.add("prev");

  let nextSlide = activeSlide.nextElementSibling;
  if (nextSlide) nextSlide.classList.add("next");
};

const renderSlider = (element) => {
  const slider = document.querySelector(element);
  if (slider) {
    document.querySelector("#forvard").addEventListener("click", nextSlide);
    document.querySelector("#back").addEventListener("click", prevSlide);
    document.querySelector("#forvardMob").addEventListener("click", nextSlide);
    document.querySelector("#backMob").addEventListener("click", prevSlide);
    renderSlides();
    renderBtns();
  }
};
