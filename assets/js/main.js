const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript:"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    initialCountry: "tr",
});

const info = document.querySelector(".alert-info");
const error = document.querySelector(".alert-error");

function process(event) {
    event.preventDefault();
   
    const phoneNumber = phoneInput.getNumber();
    const phoneCountry = phoneInput.s.name;

    info.style.display = "none";
    error.style.display = "none";
    
    if (phoneInput.isValidNumber()) {
      info.style.display = "";
      info.innerHTML = `${phoneCountry} formatında telefon numarası: <strong>${phoneNumber}</strong>`;
    } else {
      error.style.display = "";
      error.innerHTML = `Invalid phone number.`;
    }
}