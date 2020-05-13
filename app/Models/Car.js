import { generateId } from "../Utils.js"

export default class Car {
    constructor(data) {
        this.id = generateId()
        this.title = data.title
        this.make = data.make
        this.model = data.model || "n/a"
        this.price = data.price
        this.description = data.description || "no description provided"
        this.imgUrl = data.imgUrl
    }

    get Template() {
        return /*html*/`
        <div class="col-3 mt-2">
            <div class="card">
                <img class="card-img-top" src="${this.imgUrl}" alt="">
                <div class="card-body">
                    <h4 class="card-title">${this.title}</h4>
                    <p class="card-text">${this.make} - ${this.model} - $${this.price}</p>
                    <p class="card-text">${this.description}</p>
                    <button class="btn btn-outline-success" onclick="app.carsController.buy('${this.id}')">Buy!</button>
                </div>
            </div>
        </div>`
    }
}