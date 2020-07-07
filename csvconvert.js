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
	// DOUBLE QOUTES KISZEDÉS
	let asd = csv.replace(/\"/g, "")
	let asd2 = asd.replace(/\,/g, "\n")

	let allTextLines = asd2.split(/\n/)
	while (allTextLines.length) {
		data.push(allTextLines.shift())
	}

	data.splice(0, 2)

	console.log(data)

	for (let i = 0; i < data.length; i++) {
		if (data[i].startsWith(" ")) {
			data.splice(i, 1)
			console.log("FASZLÁMA BAZAM?FJASKFLHASHFLHASLHJFK")
		}
	}

	console.log(data)

	pls()
}

function errorHandler(evt) {
	if (evt.target.error.name == "NotReadableError") {
		alert("Canno't read file !")
	}
}
