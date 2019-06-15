var link = document.querySelector(".search-button-hotel");
var popup = document.querySelector(".form-wrapper");
var form = document.querySelector(".adventage-booking");
var a_date = popup.querySelector("[name=data-arriva]");
var d_date = popup.querySelector("[name=data-departure]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Человек нажал на кнопку");
  popup.classList.add("popup-up");

});

form.addEventListener("submit", function (evt){
  if (!a_date || !d_date) {
    evt.preventDefault();
    console.log("Нужно ввести даты заезда и выезда");
    popup.classList.add("popup-error");
    else {

    }

}});
