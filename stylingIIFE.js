console.log("styling script tag is included")

var CarLot = (function (styleTheSelectedCar) {


  styleTheSelectedCar.addSelectedCarClass = function (currentCarCard) {
    console.log("addSelectedCarClass is running")
    currentCarCard.classList.add("selectedCar");
  }

  styleTheSelectedCar.removeSelectedCarClass = function () {
    console.log("removeSelectedCarClass is running")
    var allMyCarCards = document.querySelectorAll(".carCard");
      console.log(allMyCarCards)
    for (var i = allMyCarCards.length - 1; i >= 0; i--){
    allMyCarCards[i].classList.remove("selectedCar")
    }

  styleTheSelectedCar.bindDescriptionToInputBox = function () {
    var inputField = document.getElementById("inputField")
    var currentCar = evt
      inputField.focus();
      inputField.addEventListener("keypress-input", function (evt) {
    console.log(evt);
    inputField.value = evt.target.value
      })
  }

  return styleTheSelectedCar

} (CarLot || {})
