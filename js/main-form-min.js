var link=document.querySelector(".search-button-hotel"),popup=document.querySelector(".hotel-search"),a_date=popup.querySelector("[name=data-arrival]"),d_date=popup.querySelector("[name=data-departure]"),adults_num=popup.querySelector("[name=adults-number]"),chil_num=popup.querySelector("[name=children-number]");link.addEventListener("click",function(e){e.preventDefault(),console.log("Человек нажал на кнопку"),popup.classList.contains("popup-closed")?(popup.classList.remove("popup-closed"),popup.classList.add("popup-open"),popup.classList.remove("popup-error")):(popup.classList.remove("popup-open"),popup.classList.add("popup-closed"))}),popup.addEventListener("submit",function(e){a_date.value&&d_date.value&&adults_num.value&&chil_num.value?popup.classList.remove("popup-error"):(e.preventDefault(),console.log("Нужно ввести даты заезда и выезда"),popup.classList.add("popup-error"))});
