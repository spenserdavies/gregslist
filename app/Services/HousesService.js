import store from "../store.js"
import House from "../Models/House.js"

class HousesService {
  buy(id) {
    console.log("bought a house dude")
    store.removeHouse(id)
  }

  newHouse(rawHouse) {
    let house = new House(rawHouse)
    store.addHouse(house)
  }
}

const HOUSE_SERVICE = new HousesService();
export default HOUSE_SERVICE;