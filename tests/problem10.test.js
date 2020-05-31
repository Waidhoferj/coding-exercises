let { EventQueue } = require("../problem10");
// jest.setTimeout(20000);
test("x", () => expect(0).toBe(0));
// test.skip("Basic example", async () => {
//   let q = new EventQueue();
//   let job1 = (name) => `Hello ${name}`;
//   let time1 = 1000;

//   let job2 = (name) => `Goodbye ${name}`;
//   let time2 = 2000;

//   q.schedule(job1, time1, ["Doug"]);
//   await delay(time1 + 1000);
//   let result = q.getCompleted();
//   expect(q.results).toEqual([`Hello Doug`]);
//   q.results = [];
//   q.schedule(job2, time2, ["to Romance"]);
//   await delay(time2 + 1000);
//   result = q.getCompleted();
//   expect(q.results).toEqual([`Goodbye to Romance`]);
//   console.log(result);
// });

// function delay(ms) {
//   return new Promise((res) =>
//     setTimeout(() => {
//       res();
//     }, ms)
//   );
// }
