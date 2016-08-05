console.log("JS script tags are good")

var CarLot = (function (carLot) {
  console.log(carLot)

  carLot.activateEvents = function () {
    console.log("activateEvents funtion is running")
////adding event listener to each card
    var allMyCarCards = document.querySelectorAll(".carCard");
      console.log(allMyCarCards)
    for (var i = allMyCarCards.length - 1; i >= 0; i--) {
      allMyCarCards[i].addEventListener("click", addStylingToSelectedCar)

    function addStylingToSelectedCar (evt) {
      console.log(evt.currentTarget)
      CarLot.removeSelectedCarClass()
      CarLot.addSelectedCarClass(evt.currentTarget)
      CarLot.bindDescriptionToInputBox(evt.currentTarget.lastElementChild)
    }
  }
    }
  return carLot

})(CarLot || {})


