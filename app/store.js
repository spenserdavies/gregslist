import Car from "./Models/Car.js";
import House from "./Models/House.js";
import Job from "./Models/Job.js"

let _state = {
  /** @type {Car[]} */
  cars: [
    new Car({ title: "Jinkies", make: "Mystery", model: "Machine", price: "10000", description: "smells like a large dog in here", imgUrl: "https://i.ytimg.com/vi/ArKckzLPM0M/maxresdefault.jpg" }),
    new Car({ title: "How is this for sale", make: "Bat", model: "mobile", price: "30000", description: "look at all these cool buttons!", imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81Lc2ZJXj4L._AC_SX425_.jpg" })
  ],

  houses: [
    new House({ sqFootage: "87000", beds: "200", baths: "1", price: "19", city: "Boise", imgUrl: "https://content.fortune.com/wp-content/uploads/2019/06/lan07.19-landlord-houses-featured.jpg"})

  ],
  jobs: [
    new Job({company: "Pizza Hut", position: "Shift Leader", pay: "14.00", startDate: "June 1", duties:"Close the store"})]
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
  addCar(car) {
    _state.cars.push(car)
  }
  removeCar(id) {
    // NOTE find the index of the car with the provided id
    let index = _state.cars.findIndex(c => c.id == id)
    // NOTE check to make sure it was found
    if (index == -1) {
      console.error("invalid id")
      return;
    }
    _state.cars.splice(index, 1)
  }


  addHouse(house) {
    _state.houses.push(house)
  }
  removeHouse(id) {
    let hI = _state.houses.findIndex(h => h.id == id)
    if (hI == -1) {
      console.error("invalid ID")
      return;
    }
    _state.houses.splice(hI, 1)
  }

  addJob(job){
    _state.jobs.push(job)
  }

  removeJob(id){
    let jI = _state.jobs.findIndex(j => j.id == id)
    if (jI == -1) {
      console.error("invalid ID")
      return;
    }
    _state.jobs.splice(jI, 1);
  }
}

const STORE = new Store();
export default STORE;
