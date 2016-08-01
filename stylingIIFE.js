var CarLot = (function activateEvents() {

return {
  bindInputEventHandler: function (event) {
  document.getElementById("selectedCar").addEventListener("keypress-input",
    function bindInputEvent (event)) {
      var inputField = document.getElementById("inputField");
      var currentCarDescription = document.getElementById("currentCarDescription");
      inputField.innerHTML = currentCarDescription;
    }
  },

  clickCarEvent: function (event) {
    document.getElementById("selectedCar").addEventListener("click",
      function selectedCarClick (event){
        var selectedCar = getElementById("selectedCar");
        selectedCar.style.backgroudColor = "lightblue";
        selectedCar.style.border = "5px";

        }
      }
}

})(CarLot || {})


CarLot.bindInputEventHandler(CarLot.bindInputEventHandler)
