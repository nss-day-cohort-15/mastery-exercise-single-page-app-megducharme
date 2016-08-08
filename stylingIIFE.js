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

  // styleTheSelectedCar.bindDescriptionToInputBox = function (description) {

  //   var inputField = document.getElementById("inputField")
  //   // var allMyCarCards = document.querySelectorAll(".carCard")

  //     inputField.focus();


  //     // inputField.removeEventListener("focus", changeDescription)

  //     // function changeDescription (evt) {
  //     inputField.addEventListener("keyup", function (){
  //         description.innerHTML = inputField.value
  //     })
    // }


  return styleTheSelectedCar

}) (CarLot || {})
