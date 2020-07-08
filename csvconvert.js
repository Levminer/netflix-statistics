let data = []

function handleFiles(files) {
	// Check for the various File API support.
	if (window.FileReader) {
		// FileReader are supported.
		getAsText(files[0])
	} else {
		alert("FileReader are not supported in this browser.")
	}
}

function getAsText(fileToRead) {
	var reader = new FileReader()
	// Handle errors load
	reader.onload = loadHandler
	reader.onerror = errorHandler
	// Read file into memory as UTF-8
	reader.readAsText(fileToRead)
}

function loadHandler(event) {
	var csv = event.target.result
	processData(csv)
}

function processData(csv) {
	// remove double qoutes
	let pre_data1 = csv.replace(/\"/g, "")

	// new line
	let pre_data2 = pre_data1.replace(/\,/g, "\n")

	let allTextLines = pre_data2.split(/\n/)
	while (allTextLines.length) {
		data.push(allTextLines.shift())
	}

	// remove title and date
	data.splice(0, 2)

	console.log("BEFORE REMOVE EMPTY CHARACHTERS")
	console.log(data)
	console.log(data.length)

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

	console.log(data)
	console.log(data.length)

	data = data.filter(function (item) {
		return item.indexOf(" ") !== 0
	})

	console.log(data)
	console.log(data.length)

	pls()
}

function errorHandler(evt) {
	if (evt.target.error.name == "NotReadableError") {
		alert("Canno't read file !")
	}
}
