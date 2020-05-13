import store from "../store.js";
import Car from "../Models/Car.js";

//Public
class CarsService {
    buy(id) {
        console.log("ChaChing")
        store.removeCar(id)
    }
    newCar(rawCar) {
        // convert POJO into Car class object
        let car = new Car(rawCar)
        store.addCar(car)
    }
}

const CAR_SERVICE = new CarsService();
export default CAR_SERVICE;
