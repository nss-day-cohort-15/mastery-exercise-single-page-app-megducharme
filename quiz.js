
var container = document.querySelector(".container")


var xhr = new XMLHttpRequest()
xhr.open('GET', 'inventory.json')
xhr.addEventListener('load', didLoadData)
xhr.send()

function didLoadData () {
  var cars = JSON.parse(xhr.responseText).cars


  cars.forEach(function(car) {
    container.innerHTML += `
    <div class="col-sm-4 carCard">
      <img class="carImg" src="${car.img}">
      <h2>"${car.model}"</h2>
      <h3>"${car.year}"</h3>
      <h3>"${car.price}"</h3>
      <h3>"${car.color}"</h3>
      <h3>"${car.purchased}"</h3>
      <p>"${car.description}"</p>
    </div>`
  })
}

