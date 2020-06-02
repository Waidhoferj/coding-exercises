class Meeting {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  static fromTime(start, end) {
    let times = [start, end];
    let parseTimes = (time) => time.split(":").map((num) => parseInt(num));
    let toDates = ([hour, minute]) => {
      let date = new Date();
      date.setHours(hour);
      date.setMinutes(minute);
      return date;
    };
    let [startDate, endDate] = times.map(parseTimes).map(toDates);
    return new Meeting(startDate, endDate);
  }

  length() {
    return this.end.getTime() - this.start.getTime();
  }
  conflictsWith(meeting) {
    return (
      (this.start > meeting.start && this.start < meeting.end) ||
      (this.end > meeting.start && this.end < meeting.end)
    );
  }

  toString() {
    let getMinutes = (time) => String(time.getMinutes()).padStart(2, "0");
    return `${this.start.getHours()}:${getMinutes(
      this.start
    )} - ${this.end.getHours()}:${getMinutes(this.end)}`;
  }
}

function scheduleMeetings(meetings) {
  let sortedMeetings = meetings.sort(
    (m1, m2) => m1.end.getTime() - m2.end.getTime()
  );
  let schedule = [sortedMeetings.shift()];

  for (let meeting of sortedMeetings) {
    if (meeting.conflictsWith(schedule[schedule.length - 1])) continue;
    schedule.push(meeting);
  }
  return schedule;
}

module.exports = { Meeting, scheduleMeetings };
