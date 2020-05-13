import { generateId } from "../Utils.js"

export default class House {
  constructor(data) {
    this.id = generateId()
    this.sqFootage = data.sqFootage || "call for sqfootage"
    this.beds = data.beds
    this.baths = data.baths
    this.price = data.price
    this.city = data.city  || "call for location"
    this.imgUrl = data.imgUrl
  }

  get Template() {
    return /*html*/`
    <div class="col-3 mt-2">
        <div class="card">
            <img class="card-img-top" src="${this.imgUrl}" alt="">
            <div class="card-body">
                <h4 class="card-title">${this.sqFootage} SQ FT</h4>
                <p class="card-text">${this.beds} Bed(s) - ${this.baths} Bath(s) - $${this.price}</p>
                <p class="card-text">Located in ${this.city}</p>
                <button class="btn btn-outline-success" onclick="app.housesController.buy('${this.id}')">Buy!</button>
            </div>
        </div>
    </div>`
}
}