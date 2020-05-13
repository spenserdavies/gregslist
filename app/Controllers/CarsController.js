import _store from "../store.js";
import _carService from "../Services/CarsService.js";

// Private
function _draw() {
    let cars = _store.State.cars
    let template = ''
    cars.forEach(c => template += c.Template)
    document.getElementById("cars").innerHTML = template;
}


// Public
export default class CarsController {
    constructor() {
        _draw();
    }
    newCar(event) {
        // NOTE This prevents page reload
        event.preventDefault();
        // grab the element that triggered the event
        let formData = event.target
        // collect car data from the form
        let rawCar = {
            make: formData.make.value,
            model: formData.model.value,
            title: formData.title.value,
            description: formData.description.value,
            price: formData.price.value,
            imgUrl: formData.imgUrl.value
        }
        formData.reset();
        _carService.newCar(rawCar)
        _draw();
    }

    buy(id) {
        _carService.buy(id);
        _draw();
    }
}
