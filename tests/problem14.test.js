let { scheduleMeetings, Meeting } = require("../problem14");

test("basic example", () => {
  let meetings = [
    ["6:45", "7:15"],
    ["7:45", "8:15"],
  ].map(([start, end]) => Meeting.fromTime(start, end));
  let scheduled = scheduleMeetings(meetings)
    .map((m) => m.toString())
    .sort();
  let correct = ["6:45 - 7:15", "7:45 - 8:15"].sort();
  expect(scheduled).toEqual(correct);
});

test("medium example", () => {
  let meetings = [
    ["15:45", "16:15"],
    ["5:30", "6:15"],
    ["9:30", "10:15"],
    ["8:30", "9:15"],
    ["17:00", "18:15"],
  ].map(([start, end]) => Meeting.fromTime(start, end));
  let scheduled = scheduleMeetings(meetings)
    .map((m) => m.toString())
    .sort();
  let correct = [
    "5:30 - 6:15",
    "8:30 - 9:15",
    "9:30 - 10:15",
    "15:45 - 16:15",
    "17:00 - 18:15",
  ].sort();
  expect(scheduled).toEqual(correct);
});

test("overlap example", () => {
  let meetings = [
    ["15:45", "16:15"],
    ["5:30", "6:15"],
    ["9:30", "10:15"],
    ["8:30", "9:45"],
    ["17:00", "18:15"],
  ].map(([start, end]) => Meeting.fromTime(start, end));
  let scheduled = scheduleMeetings(meetings)
    .map((m) => m.toString())
    .sort();
  let correct = [
    "5:30 - 6:15",
    "8:30 - 9:45",
    "15:45 - 16:15",
    "17:00 - 18:15",
  ].sort();
  expect(scheduled).toEqual(correct);
});
