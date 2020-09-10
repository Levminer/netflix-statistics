let state
let data = []
let date

const input = document.querySelector("#input")

const handlefiles = (files) => {
	// check for reupload
	if (state == 1) {
		const restart_confirm = confirm(
			"Biztos fel akarsz tölteni egy új statisztikát? Ki akarod törölni a feltöltött statisztikát és feltölteni egy újat?"
		)
		if (restart_confirm == true) {
			location.reload()
		} else {
			return
		}
	}
	// get date
	files = event.target.files
	for (const file of files) {
		date = new Date(file.lastModified)
		console.log(date)
	}

	// read file
	if (window.FileReader) {
		getastext(files[0])
		input.innerText = "Fájl sikeresen feltöltve"
		state = 1
	} else {
		alert("A böngésződ nem támogatja ezt a funkciót! Próbálj meg egy másik böngészőt használni!")
	}
}

const getastext = (fileToRead) => {
	const reader = new FileReader()
	reader.onload = loadhandler
	reader.onerror = errorhandler
	reader.readAsText(fileToRead)
}

const loadhandler = (event) => {
	const csv = event.target.result
	processdata(csv)
}

const errorhandler = (evt) => {
	if (evt.target.error.name == "NotReadableError") {
		alert("Nem sikerült feltölteni a fájlt! Rossz vagy sérült fájlt töltöttél fel!")
	}
}

const processdata = (csv) => {
	// remove double qoutes
	const pre_data1 = csv.replace(/"/g, "")

	// new line
	const pre_data2 = pre_data1.replace(/,/g, "\n")

	// make the array
	const pre_data3 = pre_data2.split(/\n/)
	while (pre_data3.length) {
		data.push(pre_data3.shift())
	}

	// remove title and date
	data.splice(0, 2)

	console.log("Before remove dates and blanks!")
	console.log(data.length)
	console.log(data)

	// remove dates and blanks (english dates)
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

	// remove dates and blanks (not english dates)
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

	// remove empty elements
	data = data.filter((item) => {
		return item.indexOf(" ") !== 0
	})

	// remove last blank
	data.splice(-1, 1)

	console.log("After remove dates and blanks!")
	console.log(data.length)
	console.log(data)

	start()
}
