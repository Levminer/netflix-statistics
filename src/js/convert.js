let data = []

const input = document.querySelector("#input")

const loadFile = (files) => {
	if (window.FileReader) {
		input.innerText = "File uploaded successfully"
		input.disabled = true

		// Read file
		const reader = new FileReader()
		reader.readAsText(files[0])

		// File read successful
		reader.onload = (event) => {
			processData(event.target.result)
		}

		// File read error
		reader.onerror = (event) => {
			if (evt.target.error.name == "NotReadableError") {
				alert("Failed to upload the file! You uploaded a corrupted or not supported file!")
			}
		}
	} else {
		alert("Your browser doesn't support this function! Tyr another browser!")
	}
}

const processData = (csv) => {
	// Remove double quotes
	const pre_data1 = csv.replace(/"/g, "")

	// New line
	const pre_data2 = pre_data1.replace(/,/g, "\n")

	// Make the array
	const pre_data3 = pre_data2.split(/\n/)
	while (pre_data3.length) {
		data.push(pre_data3.shift())
	}

	// Remove default title and date
	data.splice(0, 2)

	// Remove dates and blanks (english dates)
	data = data.filter((item) => {
		return item.indexOf("1/") !== 0
	})

	data = data.filter((item) => {
		return item.indexOf("2/") !== 0
	})

	data = data.filter((item) => {
		return item.indexOf("3/") !== 0
	})

	data = data.filter((item) => {
		return item.indexOf("4/") !== 0
	})

	data = data.filter((item) => {
		return item.indexOf("5/") !== 0
	})

	data = data.filter((item) => {
		return item.indexOf("6/") !== 0
	})

	data = data.filter((item) => {
		return item.indexOf("7/") !== 0
	})

	data = data.filter((item) => {
		return item.indexOf("8/") !== 0
	})

	data = data.filter((item) => {
		return item.indexOf("9/") !== 0
	})

	data = data.filter((item) => {
		return item.indexOf("10/") !== 0
	})

	data = data.filter((item) => {
		return item.indexOf("11/") !== 0
	})

	data = data.filter((item) => {
		return item.indexOf("12/") !== 0
	})

	// Remove dates and blanks (not english dates)
	data = data.filter((item) => {
		return item.indexOf("2015.") !== 0
	})

	data = data.filter((item) => {
		return item.indexOf("2016.") !== 0
	})

	data = data.filter((item) => {
		return item.indexOf("2017.") !== 0
	})

	data = data.filter((item) => {
		return item.indexOf("2018.") !== 0
	})

	data = data.filter((item) => {
		return item.indexOf("2019.") !== 0
	})

	data = data.filter((item) => {
		return item.indexOf("2020.") !== 0
	})

	data = data.filter((item) => {
		return item.indexOf("2021.") !== 0
	})

	data = data.filter((item) => {
		return item.indexOf("2022.") !== 0
	})

	// Remove empty elements
	data = data.filter((item) => {
		return item.indexOf(" ") !== 0
	})

	// Remove last blank
	data.splice(-1, 1)

	console.log("Removed dates and blanks:", data, data.length)

	createStatistics()
}
