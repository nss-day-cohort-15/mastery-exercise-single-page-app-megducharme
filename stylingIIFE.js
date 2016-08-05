console.log("styling script tag is included")

var CarLot = (function (styleTheSelectedCar) {


  styleTheSelectedCar.removeSelectedCarClass = function () {
    console.log("removeSelectedCarClass is running")
    var allMyCarCards = document.querySelectorAll(".carCard");

    for (var i = allMyCarCards.length - 1; i >= 0; i--){
    allMyCarCards[i].classList.remove("selectedCar")
    }
 }

  styleTheSelectedCar.addSelectedCarClass = function (currentCarCard) {
    console.log("addSelectedCarClass is running")
    currentCarCard.classList.add("selectedCar");
  }

  styleTheSelectedCar.bindDescriptionToInputBox = function (description) {
    console.log(description)
    console.log("bindDescriptionToInputBox is running")
    var inputField = document.getElementById("inputField")
      inputField.focus();
      inputField.addEventListener("keyup", function (evt) {
          description.innerHTML += inputField.value
      })
  }

  return styleTheSelectedCar

}) (CarLot || {})
