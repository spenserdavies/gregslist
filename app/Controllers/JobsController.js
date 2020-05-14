import _store from "../store.js"
import _jobsService from "../Services/JobsService.js"

function _draw() {
  let jobs = _store.State.jobs
  let template = ''
  jobs.forEach(j => template += j.Template)
  document.getElementById("jobs").innerHTML = template;
}

function _toggle(){
  let carsElem = document.getElementById("allCars")
  carsElem.classList.add("hidden")

  let jobsElem = document.getElementById("allJobs")
  jobsElem.classList.remove("hidden")

  let housesElem = document.getElementById("allHouses")
  housesElem.classList.add("hidden")

  let housesButton = document.getElementById("houseButton")
  housesButton.classList.remove("hidden")

  let jobsButton = document.getElementById("jobButton")
  jobsButton.classList.add("hidden")

  let carsButton = document.getElementById("carButton")
  carsButton.classList.remove("hidden")
}

export default class JobsController{
  constructor() {
    _draw();
  }

  newJob(event){
    event.preventDefault();
    let formData = event.target
    let rawJob = {
      company: formData.company.value,
      position: formData.position.value,
      pay: formData.pay.value,
      startDate: formData.startDate.value,
      duties: formData.duties.value
    }
    formData.reset();
    _jobsService.newJob(rawJob)
    _draw();
  }

  apply(id){
    _jobsService.apply(id);
    _draw();
  }

  toggle() {
    _toggle()
  }
}