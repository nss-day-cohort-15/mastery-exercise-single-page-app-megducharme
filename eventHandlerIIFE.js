console.log("JS script tags are good")

var CarLot = (function (carLot) {
  console.log(CarLot)

  carLot.activateEvents = function () {
    console.log("activateEvents funtion is running")
////adding event listener to each card
    var allMyCarCards = document.querySelectorAll(".carCard");
      console.log(allMyCarCards)
    for (var i = allMyCarCards.length - 1; i >= 0; i--) {
      allMyCarCards[i].addEventListener("click", function (evt) {
      var carContainer = document.querySelector(".container")
      console.log(evt)
      evt.currentTarget.classList.add("selectedCar");
    // }
      })// End of for loop
  }

///reset selected car
  carLot.resetCars = function () {
    var allMyCarCards = document.querySelectorAll(".selectedCar");
    console.log(allMyCarCards)
    for (var i = allMyCarCards.length - 1; i >= 0; i--) {
      allMyCarCards[i].addEventListener("click", function (evt) {
      allMyCarCards.classList.remove("selectedCar");
    })
  }

////binding the text in the input field to the text in the description
    // var inputField = document.getElementById("inputField");
//     inputField.addEventListener("keypress-input", function (evt) {
//       console.log(evt);
//       inputField.innerHTML =

// ////resetting cards to original styling


//     })

  return carLot

}(CarLot || {})

CarLot.resetCars(CarLot.activateEvents)

