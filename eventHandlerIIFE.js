console.log("JS script tags are good")

var CarLot = (function (carLot) {
  var currentTargetCar = null;
  console.log(carLot)

  carLot.activateEvents = function () {
    console.log("activateEvents funtion is running")
////adding event listener to each card
    var allMyCarCards = document.querySelectorAll(".carCard");
      console.log(allMyCarCards)
    for (var i = allMyCarCards.length - 1; i >= 0; i--) {
      allMyCarCards[i].addEventListener("click", addStylingToSelectedCar)

    function addStylingToSelectedCar (evt) {
      currentTargetCar = evt.currentTarget
      console.log(currentTargetCar)
      CarLot.removeSelectedCarClass()
      CarLot.addSelectedCarClass(currentTargetCar)
    }
  }

      var inputField = document.getElementById("inputField")
      inputField.addEventListener("keypress", example)
      function example(event){
        console.log(currentTargetCar)
      }


}
  return carLot

})(CarLot || {})


