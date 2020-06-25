var bookingLink = document.querySelector(".hotel-search-link");
var bookingPopup = document.querySelector(".modal");
var bookingForm = document.querySelector(".appointment");
var bookingCheckin = document.querySelector(".arrival")
var bookingCheckout = document.querySelector(".departure")
var bookingAdults = document.querySelector(".adults");
var bookingKids = document.querySelector(".childs");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("number-of-adults");
  storage = localStorage.getItem("number-of-childs");
} catch (err) {
  isStorageSupport = false;
}

bookingLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  bookingPopup.classList.toggle("modal-hide");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (bookingPopup.classList.add("modal-hide")) {
      evt.preventDefault();
      loginPopup.classList.remove("modal-hide");
      loginPopup.classList.remove("modal-error");
    }
  }
});

bookingForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!bookingCheckin.value || !bookingCheckout.value || !bookingAdults.value || !bookingKids.value) {
    evt.preventDefault();
    bookingPopup.classList.remove("modal-error");
    bookingPopup.offsetWidth = bookingPopup.offsetWidth;
    bookingPopup.classList.add("modal-error");
  }
  else {
    if (isStorageSupport) {
      localStorage.setItem("number-of-adults", bookingAdults.value);
      localStorage.setItem("number-of-childs", bookingKids.value);
    }
    else {}
  }
});


