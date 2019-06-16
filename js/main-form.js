var link = document.querySelector(".search-button-hotel");
var popup = document.querySelector(".hotel-search");
var form = document.querySelector(".adventage-booking");
var a_date = popup.querySelector("[name=data-arriva]");
var d_date = popup.querySelector("[name=data-departure]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Человек нажал на кнопку");
if(popup.classList.contains("popup-closed")){
   popup.classList.remove("popup-closed");
   popup.classList.add("popup-open");
}
else {popup.classList.remove("popup-open");
      popup.classList.add("popup-closed");
}
});





popup.addEventListener("submit", function (evt){
  if (!a_date || !d_date) {
    evt.preventDefault();
    console.log("Нужно ввести даты заезда и выезда");
    popup.classList.remove("popup-error");}
    else {popup.classList.remove("popup-error")};
})
