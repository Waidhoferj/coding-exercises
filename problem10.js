class EventQueue {
  constructor() {
    this.queue = [];
    this.results = [];
  }

  schedule(job, ms, args) {
    let scheduledJob = {
      status: "pending",
      timeCompleted: ms + Date.now(),
      job: new Promise((resolve, reject) => {
        setTimeout(() => {
          let result;
          try {
            scheduledJob.status = "executing";
            this.results.push(job(...args));
            scheduledJob.status = "success";
          } catch (err) {
            scheduledJob.status = "failed";
            this.results.push("failed:", job);
            reject(err);
          }
          resolve(result);
        }, ms);
      }),
    };

    let i, len;
    for (i = 0, len = this.queue.length; i < len; i++) {
      if (scheduledJob.timeCompleted < this.queue[i].timeCompleted) {
        this.queue.splice(i, 0, scheduledJob);
        break;
      }
    }
    if (i === this.queue.length) this.queue.push(scheduledJob);
  }

  showStatus() {
    return this.queue.map(({ status, job }) => ({
      status,
      job: job.toLocaleString(),
    }));
  }

  getCompleted() {
    let i, len;

    let completed = this.queue
      .filter(({ status }) => status === "success")
      .map(({ job }) => job);
    this.queue = this.queue.filter(({ status }) => status !== "success");
    return Promise.all(completed);
  }
}

export default { EventQueue };
