document.addEventListener("DOMContentLoaded", function () {
  renderSlider(".slider");
});

const nextSlide = () => {
  let activeSlide = document.querySelector(".slide--active");
  let nextSlide = activeSlide.nextElementSibling;
  if (nextSlide) {
    activeSlide.classList.remove("slide--active");
    nextSlide.classList.remove("next");
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
    prevSlide.classList.remove("prev");
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

const renderBtns = () => {
  // Update button states for both desktop and mobile buttons
  let nextBtn = document.querySelector("#forvard");
  let prevBtn = document.querySelector("#back");
  let nextBtnMob = document.querySelector("#forvardMob");
  let prevBtnMob = document.querySelector("#backMob");

  updateButtonState(prevBtn, nextBtn);
  updateButtonState(prevBtnMob, nextBtnMob);
};

const renderSlides = () => {
  let slides = document.querySelectorAll(".slide");
  if (!slides) {
    return;
  }
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
    // Add event listeners for desktop buttons
    document.querySelector("#forvard").addEventListener("click", nextSlide);
    document.querySelector("#back").addEventListener("click", prevSlide);

    // Add event listeners for mobile buttons
    document.querySelector("#forvardMob").addEventListener("click", nextSlide);
    document.querySelector("#backMob").addEventListener("click", prevSlide);

    renderSlides();
    renderBtns();
  }
};
