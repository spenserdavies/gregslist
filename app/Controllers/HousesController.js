import _store from "../store.js"
import _housesService from "../Services/HousesService.js"

function _draw(){
  let houses = _store.State.houses
  let template = ''
  houses.forEach(h => template += h.Template)
  document.getElementById("houses").innerHTML = template;
}

export default class HousesController {
  constructor() {
    _draw();
  }
  newHouse(event){
    event.preventDefault();
    let formData = event.target
    let rawHouse = {
      sqFootage: formData.sqFootage.value,
      beds: formData.beds.value,
      baths: formData.baths.value,
      price: formData.price.value,
      city: formData.city.value,
      imgUrl: formData.imgUrl.value
    }
    formData.reset();
    _housesService.newHouse(rawHouse)
    _draw();
  }

  buy(id) {
    _housesService.buy(id);
    _draw();
  }
}