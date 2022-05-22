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
		return e.date
	})
	const payable = eligibleDates.reduce(
		function (memo, d) {
			return memo + wagesEarnedOnDate.call(this, d)
		}.bind(this),
		0
	) // <== Hm, why did we need to add bind() there? We'll discuss soon!

	return payable
}

function createEmployeeRecord(employee) {
	const employeeRecord = []
	employeeRecord.firstName = employee[0]
	employeeRecord.familyName = employee[1]
	employeeRecord.title = employee[2]
	employeeRecord.payPerHour = employee[3]
	employeeRecord.timeInEvents = []
	employeeRecord.timeOutEvents = []
	return employeeRecord
}

function createEmployeeRecords(records) {
	return records.map(createEmployeeRecord)
}

function createTimeInEvent(dateTime) {
	const timeObj = {
		type: "TimeIn",
		date: dateTime.split(" ")[0],
		hour: parseInt(dateTime.slice(-4), 10),
	}
	this.timeInEvents.push(timeObj)
	return this
}

function createTimeOutEvent(dateTime) {
	const timeObj = {
		type: "TimeOut",
		date: dateTime.split(" ")[0],
		hour: parseInt(dateTime.slice(-4), 10),
	}
	this.timeOutEvents.push(timeObj)
	return this
}

function hoursWorkedOnDate(workDate) {
	const timeIn = this.timeInEvents.find((timeInArr) => workDate === timeInArr.date)
	const timeOut = this.timeOutEvents.find((timeOutArr) => workDate === timeOutArr.date)
	return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(workDate) {
	return hoursWorkedOnDate.call(this, workDate) * this.payPerHour
}

function findEmployeeByFirstName(collection, firstNameString) {
	const employee = collection.find((arr) => arr.firstName === firstNameString)
	return employee
}

function calculatePayroll(array) {
	let payroll = array.reduce((acc, cur) => {
		return acc + allWagesFor.call(cur)
	}, 0)
	return payroll
}
