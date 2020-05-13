import { generateId } from "../Utils.js"
export default class Job {
  constructor(data) {
    this.id = generateId()
    this.position = data.position
    this.company = data.company
    this.pay = data.pay
    this.duties = data.duties
    this.startDate = data.startDate
  }

  get Template() {
    return /*html*/`
  <div class="col-3 mt-2">
  <div class="card">
      <div class="card-body">
          <h4 class="card-title">${this.company}</h4>
          <p class="card-text">${this.position} - $${this.pay} / hour</p>
          <p class="card-text">Start on: ${this.startDate}</p>
          <p class="card-text">${this.duties}</p>
          <button class="btn btn-outline-success" onclick="app.jobsController.apply('${this.id}')">Apply!</button>
      </div>
  </div>
</div>`
  }
}