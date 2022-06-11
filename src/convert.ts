import { createStatistics } from "./index"

const CSVToArray = (strData) => {
	// Check to see if the delimiter is defined. If not,
	// then default to comma.
	const strDelimiter = ","

	// Create a regular expression to parse the CSV values.
	const objPattern = new RegExp(
		// Delimiters.
		"(\\" +
			strDelimiter +
			"|\\r?\\n|\\r|^)" +
			// Quoted fields.
			'(?:"([^"]*(?:""[^"]*)*)"|' +
			// Standard fields.
			'([^"\\' +
			strDelimiter +
			"\\r\\n]*))",
		"gi"
	)

	// Create an array to hold our data. Give the array
	// a default empty first row.
	const arrData = [[]]

	// Create an array to hold our individual pattern
	// matching groups.
	let arrMatches = null

	// Keep looping over the regular expression matches
	// until we can no longer find a match.
	while ((arrMatches = objPattern.exec(strData))) {
		// Get the delimiter that was found.
		let strMatchedDelimiter = arrMatches[1]

		// Check to see if the given delimiter has a length
		// (is not the start of string) and if it matches
		// field delimiter. If id does not, then we know
		// that this delimiter is a row delimiter.
		if (strMatchedDelimiter.length && strMatchedDelimiter !== strDelimiter) {
			// Since we have reached a new row of data,
			// add an empty row to our data array.
			arrData.push([])
		}

		let strMatchedValue

		// Now that we have our delimiter out of the way,
		// let's check to see which kind of value we
		// captured (quoted or unquoted).
		if (arrMatches[2]) {
			// We found a quoted value. When we capture
			// this value, unescape any double quotes.
			strMatchedValue = arrMatches[2].replace(new RegExp('""', "g"), '"')
		} else {
			// We found a non-quoted value.
			strMatchedValue = arrMatches[3]
		}

		// Now that we have our value string, let's add
		// it to the data array.
		arrData[arrData.length - 1].push(strMatchedValue)
	}

	arrData.splice(0, 1)

	const titles = []
	const dates = []

	for (let i = 0; i < arrData.length - 1; i++) {
		titles.push(arrData[i][0])
		dates.push(arrData[i][1])
	}

	// Return the parsed data.
	return { dates, titles }
}

export const loadFile = (event) => {
	const input: HTMLInputElement = document.querySelector("#input")

	if (window.FileReader) {
		input.innerText = "File uploaded successfully"
		input.disabled = true

		// Read file
		const reader = new FileReader()
		reader.readAsText(event.target.files[0])

		// File read successful
		reader.onload = (event) => {
			processData(event.target.result)
		}

		// File read error
		reader.onerror = (event) => {
			if (event.target.error.name == "NotReadableError") {
				alert("Failed to upload the file! You uploaded a corrupted or not supported file!")
			}
		}
	} else {
		alert("Your browser doesn't support this function! Tyr another browser!")
	}
}

const processData = (csv) => {
	const processed = CSVToArray(csv)

	let data = processed.titles
	let dates = processed.dates

	createStatistics(data, dates)
}
