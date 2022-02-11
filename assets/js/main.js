const phoneInputField = document.querySelector("#phone");
var requestUrl = "http://ip-api.com/json";
$.ajax({
  url: requestUrl,
  type: 'GET',
    error: function(err)
    {
    console.log("Request failed, error= " + err);
    },
    success: function(json)
    {
        var countryCode = json.countryCode
        console.log(countryCode);
    }
});
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  initialCountry: "tr",
});
const info = document.querySelector(".alert-success");
const error = document.querySelector(".alert-danger");


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
       error.innerHTML = `Geçersiz telefon numarası.`;
     }
}

function inputSearch() {
  $(".iti__country-list").prepend(`
    <input type="text" id="search" placeholder="Search">
  `);

  $("#search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".iti__country-list li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  $(".iti__selected-flag").click(function() {
    $("#search").dblclick();
    $("#search").focus();
      $("#search").click(function() {
        setTimeout(function() {
          $(".iti__country-list").removeClass("iti__hide");
        },1)
      });
  })
}



function inputValidate() {
  
  $("#phone").keydown(function () {
      if (this.value.match(/[^0-9]/g)){
        this.value = this.value.replace(/[^0-9]/g,'');
      }
  });
}

$(document).ready(function() {
  inputValidate();
  inputSearch();
})