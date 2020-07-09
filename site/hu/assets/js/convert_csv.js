let data = []

function handlefiles(files) {
	if (window.FileReader) {
		getastext(files[0])
	} else {
		alert("Your browser doesn't support this function! Try to use another browser!")
	}
}

function getastext(fileToRead) {
	let reader = new FileReader()
	reader.onload = loadhandler
	reader.onerror = errorhandler
	reader.readAsText(fileToRead)
}

function loadhandler(event) {
	let csv = event.target.result
	processdata(csv)
}

function errorhandler(evt) {
	if (evt.target.error.name == "NotReadableError") {
		alert("Failed to upload the file! You have uploaded a corrupt or bad file!")
	}
}

function processdata(csv) {
	// remove double qoutes
	let pre_data1 = csv.replace(/\"/g, "")

	// new line
	let pre_data2 = pre_data1.replace(/\,/g, "\n")

	// make the array
	let pre_data3 = pre_data2.split(/\n/)
	while (pre_data3.length) {
		data.push(pre_data3.shift())
	}

	// remove title and date
	data.splice(0, 2)

	console.log("Before remove dates and blanks!")
	console.log(data.length)
	console.log(data)

	//remove dates and blanks
	data = data.filter(function (item) {
		return item.indexOf("1/") !== 0
	})

	data = data.filter(function (item) {
		return item.indexOf("2/") !== 0
	})

	data = data.filter(function (item) {
		return item.indexOf("3/") !== 0
	})

	data = data.filter(function (item) {
		return item.indexOf("4/") !== 0
	})

	data = data.filter(function (item) {
		return item.indexOf("5/") !== 0
	})

	data = data.filter(function (item) {
		return item.indexOf("6/") !== 0
	})

	data = data.filter(function (item) {
		return item.indexOf("7/") !== 0
	})

	data = data.filter(function (item) {
		return item.indexOf("8/") !== 0
	})

	data = data.filter(function (item) {
		return item.indexOf("9/") !== 0
	})

	data = data.filter(function (item) {
		return item.indexOf("10/") !== 0
	})

	data = data.filter(function (item) {
		return item.indexOf("11/") !== 0
	})

	data = data.filter(function (item) {
		return item.indexOf("12/") !== 0
	})

	data = data.filter(function (item) {
		return item.indexOf(" ") !== 0
	})

	console.log("After remove dates and blanks!")
	console.log(data.length)
	console.log(data)

	start()
}
