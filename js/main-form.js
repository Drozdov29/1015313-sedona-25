var link = document.querySelector(".search-button-hotel");
var popup = document.querySelector(".hotel-search");

var a_date = popup.querySelector("[name=data-arrival]");
var d_date = popup.querySelector("[name=data-departure]");
var adults_num = popup.querySelector("[name=adults-number]");
var chil_num = popup.querySelector("[name=children-number]");

popup.classList.add("popup-closed");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Человек нажал на кнопку");

if(popup.classList.contains("popup-closed")){
   popup.classList.remove("popup-closed");
   popup.classList.add("popup-open");
   popup.classList.remove("popup-error");
}
else {popup.classList.remove("popup-open");
      popup.classList.add("popup-closed");
}
});

popup.addEventListener("submit", function (evt){
if (!a_date.value || !d_date.value || !adults_num.value || !chil_num.value) {
  evt.preventDefault();
  console.log("Нужно ввести даты заезда и выезда");
  popup.classList.add("popup-error");}
else {popup.classList.remove("popup-error")};
})
