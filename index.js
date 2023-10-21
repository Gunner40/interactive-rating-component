const cardStart = document.querySelector(".card-start");
const cardThankYou = document.querySelector(".card-thankYou");
const thankYouRating = document.querySelector(".card-thankYou__rating__value");

const inputs = document.querySelectorAll("input[type=button");

let activeInput = 0;

inputs.forEach((input) => {
  input.addEventListener("click", () => {
    activeInput = input.value;
  });
});

const submitButton = document.querySelector(".card-start__form__submit-button");

submitButton.addEventListener("click", (e) => {
  if (activeInput > 0 && activeInput < 6) {
    thankYouRating.innerHTML = activeInput;
    cardThankYou.classList.remove("d-none");
    cardStart.classList.add("d-none");
  } else {
    submitButton.value = "Please select a rating!";
    submitButton.style.letterSpacing = "1px";
    setTimeout(function () {
      submitButton.value = "SUBMIT";
      submitButton.style.letterSpacing = "4px";
    }, 1000);
  }
  e.preventDefault();
});
