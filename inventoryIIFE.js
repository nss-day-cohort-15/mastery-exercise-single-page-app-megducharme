console.log("JS scripts are good")

var CarLot = (function (loadInventory) {
  var currentInventory = [];

  return {
    getInventory: function (cb) {
      var xhr = new XMLHttpRequest()
      xhr.open('GET', 'inventory.json')
      xhr.addEventListener('load', function (evt) {
        currentInventory = JSON.parse(evt.target.responseText).cars
        cb(currentInventory)
      })
      xhr.send()
    },
    populatePage: function () {
      var container = document.querySelector(".container")

      currentInventory.forEach(function(car) {
        container.innerHTML += `
        <div id="selectedCar" class="col-sm-4 carCard">
          <img class="carImg" src="${car.img}">
          <h2>${car.model}</h2>
          <h3>${car.year}</h3>
          <h3>${car.price}</h3>
          <h3>${car.color}</h3>
          <h3>${car.purchased}</h3>
          <p id="currentCarDescription">${car.description}</p>
        </div>`
      })
    }
  }

})(CarLot || {})

CarLot.getInventory(CarLot.populatePage)
