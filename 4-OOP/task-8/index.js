// Создайте объект "Car" с двумя свойствами: "brand" и "speed".
// Добавьте метод "drive()", который выводит сообщение в консоль: "Машина <brand> едет со скоростью <speed> км/ч".
const Car = {
    brand: '',
    speed: 0,
    drive: function(brand, speed) {
        console.log(`Машина ${this.brand} едет со скоростью ${this.speed} км/ч`)
    }
      
    
}

Car.brand = 'Ferrari'
Car.speed = 250
Car.drive()