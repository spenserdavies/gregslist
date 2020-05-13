import store from "../store.js"
import Job from "../Models/Job.js"

class JobsService {
  apply(id){
    console.log("you applied for this job")
    store.removeJob(id)
  }
  newJob(rawJob) {
    let job = new Job(rawJob)
    store.addJob(job)
  }
}

const JOBS_SERVICE = new JobsService();
export default JOBS_SERVICE;