
let cars = [
  { brand: "Ford", model: "Mustang", color: "Mavi" },
  { brand: "BMW", model: "3 Serisi", color: "Siyah" },
  { brand: "Mercedes-Benz", model: "E Serisi", color: "Kırmızı" },
  { brand: "Toyota", model: "Corolla", color: "Beyaz" }
];

function displayCars() {
  const carsContainer = document.getElementById("carsContainer");

  for (let i = 0; i < cars.length; i++) {
      const carDiv = document.createElement("div");
      carDiv.innerHTML = cars[i].brand + " - " + cars[i].model + " - Renk: " + cars[i].color;
      carsContainer.appendChild(carDiv);
  }
}


displayCars();
