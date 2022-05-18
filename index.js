/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date;
    });

    const payable = eligibleDates.reduce(
        function (memo, d) {
            return memo + wagesEarnedOnDate.call(this, d);
        }.bind(this),
        0
    ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable;
};

function createEmployeeRecord(employee) {
    const employeeRecord = [];
    employeeRecord.firstName = employee[0];
    employeeRecord.familyName = employee[1];
    employeeRecord.title = employee[2];
    employeeRecord.payPerHour = employee[3];
    employeeRecord.timeInEvents = [];
    employeeRecord.timeOutEvents = [];
    // console.log(employeeRecord);
    return employeeRecord;
}

function createEmployeeRecords(records) {
    const employeeRecords = [];
    for (const data of records) {
        employeeRecords.push(createEmployeeRecord(data));
    }
    return employeeRecords;
}

function createTimeInEvent(dateTime) {
    this.timeInEvents.push({ type: "TimeIn" });
    const timeIn = this.timeInEvents[0];
    const timeInDate = dateTime.split(" ")[0];
    const timeInHour = parseInt(dateTime.split(" ")[1]);
    timeIn.date = timeInDate;
    timeIn.hour = timeInHour;
    return this;
}

function createTimeOutEvent(dateTime) {
    this.timeOutEvents.push({ type: "TimeOut" });
    const timeOut = this.timeOutEvents[0];
    const timeOutDate = dateTime.split(" ")[0];
    const timeOutHour = parseInt(dateTime.split(" ")[1]);
    timeOut.date = timeOutDate;
    timeOut.hour = timeOutHour;
    return this;
}

function hoursWorkedOnDate(workDate) {
    for (let i = 0; i < this.timeInEvents.length; i++) {
        if (this.timeInEvents[i].date === workDate) {
            const hours =
                (this.timeOutEvents[i].hour - this.timeInEvents[i].hour) / 100;
            return hours;
        }
    }
}

function wagesEarnedOnDate(workDate) {
    const hoursWorked = hoursWorkedOnDate.call(workDate);
    for (let i = 0; i < this.timeInEvents.length; i++) {
        if (this.timeInEvents[i].date === workDate) {
            console.log(this.payPerHour * hoursWorked);
        }
    }
    // console.log(this);
    // console.log(workDate);
}
