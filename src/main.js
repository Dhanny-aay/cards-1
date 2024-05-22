// document.addEventListener("DOMContentLoaded", function () {
//   renderSlider(".slider");
// });

// const nextSlide = () => {
//   let activeSlide = document.querySelector(".slide--active");
//   let nextSlide = activeSlide.nextElementSibling;
//   if (nextSlide) {
//     activeSlide.classList.remove("slide--active");
//     nextSlide.classList.remove("next");
//     nextSlide.classList.add("slide--active");
//     renderSlides();
//     renderBtns();
//   }
// };

// const renderBtns = () => {
//   let nextBtn = document.querySelector("#forvard");
//   let prevBtn = document.querySelector("#back");

//   let activeSlide = document.querySelector(".slide--active");
//   let prevSlide = activeSlide.previousElementSibling;
//   !prevSlide
//     ? prevBtn.classList.add("disabled")
//     : prevBtn.classList.remove("disabled");

//   let nextSlide = activeSlide.nextElementSibling;
//   !nextSlide
//     ? nextBtn.classList.add("disabled")
//     : nextBtn.classList.remove("disabled");
// };
// const renderBtnsMob = () => {
//   let nextBtnMob = document.querySelector("#forvardMob");
//   let prevBtnMob = document.querySelector("#backMob");

//   let activeSlide = document.querySelector(".slide--active");
//   let prevSlide = activeSlide.previousElementSibling;
//   !prevSlide
//     ? prevBtnMob.classList.add("disabled")
//     : prevBtnMob.classList.remove("disabled");

//   let nextSlide = activeSlide.nextElementSibling;
//   !nextSlide
//     ? nextBtnMob.classList.add("disabled")
//     : nextBtnMob.classList.remove("disabled");
// };

// const prevSlide = () => {
//   let activeSlide = document.querySelector(".slide--active");
//   let prevSlide = activeSlide.previousElementSibling;
//   if (prevSlide) {
//     activeSlide.classList.remove("slide--active");
//     prevSlide.classList.remove("prev");
//     prevSlide.classList.add("slide--active");
//     renderSlides();
//     renderBtns();
//     renderBtnsMob();
//   }
// };

// const renderSlides = () => {
//   let slides = document.querySelectorAll(".slide");
//   if (!slides) {
//     return;
//   }
//   let activeSlide = document.querySelector(".slide--active");
//   if (!activeSlide) {
//     activeSlide = slides.item(0);
//     activeSlide.classList.add("slide--active");
//   }
//   [].forEach.call(slides, function (slide) {
//     slide.classList.remove("prev", "next");
//   });

//   let prevSlide = activeSlide.previousElementSibling;
//   prevSlide && prevSlide.classList.add("prev");

//   let nextSlide = activeSlide.nextElementSibling;
//   nextSlide && nextSlide.classList.add("next");
// };

// const renderSlider = (element) => {
//   const slider = document.querySelector(element);
//   if (slider) {
//     let nextButton = document.querySelector("#forvard");
//     nextButton.addEventListener("click", function () {
//       nextSlide();
//     });

//     let prevButton = document.querySelector("#back");
//     prevButton.addEventListener("click", function () {
//       prevSlide();
//     });
//     renderSlides();
//   }
// };

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
