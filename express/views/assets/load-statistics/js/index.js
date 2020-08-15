console.log(saved_statistics)
console.log(saved_statistics.length)

let select = document.getElementById("select")

for (let i = 1; i <= saved_statistics.length; i++) {
	let option = document.createElement("option")
	option.value = i
	option.innerHTML = i
	select.appendChild(option)
}

if (saved_statistics.length == 0) {
	let option = document.createElement("option")
	let ss = document.querySelector(".ss")
	ss.innerHTML = "You don't have any statistic!"
	option.innerHTML = "--"
	select.appendChild(option)
}

let restart = () => {
	location.reload()
}

let start = () => {
	//? prepare the statistic

	// get value from select
	number = parseInt(select.value - 1)
	console.log(number)

	//separate names and values
	let chart_data_1 = Object.keys(saved_statistics[number])
	let chart_data_2 = Object.values(saved_statistics[number])

	console.log("Chart names:")
	console.log(chart_data_1)
	console.log("Chart values:")
	console.log(chart_data_2)

	//make data

	let data = chart_data_2.reduce(function (a, b) {
		return a + b
	}, 0)

	console.log(data)

	///? make the statistics
	let title = chart_data_1.length

	// calculate statitics
	let watchtime_minute = Math.floor(data * 50)
	let watchtime_hour = Math.floor(watchtime_minute / 60)
	let watchtime_day = Math.floor(watchtime_hour / 24)

	console.log(`Title: ${title}`)
	console.log(`Watchtime_m: ${watchtime_minute}`)
	console.log(`Watchtime_h: ${watchtime_hour}`)
	console.log(`Watchtime_d: ${watchtime_day}`)

	//animated counters
	let c1 = new CountUp("h31", 0, title)
	let c2 = new CountUp("h32", 0, watchtime_minute)
	let c3 = new CountUp("h33", 0, watchtime_hour)
	let c4 = new CountUp("h34", 0, watchtime_day)

	c1.start()
	c2.start()
	c3.start()
	c4.start()

	//set the elements
	let foo = document.querySelector("footer")
	let thr = document.querySelector(".three")
	let but = document.querySelector("#b2")
	foo.style.bottom = "-90px"
	thr.style.display = "block"
	but.style.display = "inline"

	//? make random chart colors
	let colors = []

	let rgb_start = () => {
		for (let i = 0; i < chart_data_1.length; i++) {
			let rgb_color0 = ""
			let rgb_color1 = ""
			let rgb_color2 = ""

			for (let i = 0; i < 3; i++) {
				let rgb_randomizer = Math.floor(Math.random() * 256)

				switch (i) {
					case 0:
						rgb_color0 += rgb_randomizer
						break
					case 1:
						rgb_color1 += rgb_randomizer
						break
					case 2:
						rgb_color2 += rgb_randomizer
						break
				}
			}

			let rgb = `rgb(${rgb_color0},${rgb_color1},${rgb_color2})`

			colors.push(rgb)
		}
	}

	rgb_start()

	console.log("Colors:")
	console.log(colors)

	//? Make the chart
	let mychart = document.getElementById("chart").getContext("2d")
	Chart.defaults.global.defaultFontColor = "white"

	let thechart = new Chart(mychart, {
		type: "pie",
		data: {
			labels: chart_data_1,
			datasets: [
				{
					label: "numbers",
					data: chart_data_2,
					backgroundColor: colors,
					borderWidth: 3,
				},
			],
		},
	})
}
