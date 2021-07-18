let state = 0

const reload = () => {
	// ?reload the page
	const reload_confirm = confirm("Are you sure you want to clear the statistics?")
	if (reload_confirm == true) {
		location.reload()
	}
}

console.log(saved_statistics)
console.log(saved_statistics.length)

const select = document.getElementById("select")

for (let i = 1; i <= saved_statistics.length; i++) {
	const option = document.createElement("option")
	option.value = i
	option.innerHTML = i
	select.appendChild(option)
}

if (saved_statistics.length == 0) {
	const option = document.createElement("option")
	const ss = document.querySelector(".ss")
	ss.innerHTML = "You don't have any statistic!"
	option.innerHTML = "--"
	select.appendChild(option)
}

const start = () => {
	// ?start

	if (state == 1) {
		const restart_confirm = confirm(
			"Are you want to load a  new saved statistics? Do you want to clear the saved statistics and choose a new one?"
		)

		if (restart_confirm == true) {
			location.reload()
		} else {
			return
		}
	}

	state++

	// ? prepare the statistic

	// get value from select
	number = parseInt(select.value - 1)
	console.log(number)

	// set date
	const date = saved_dates[number]
	const final_date = date.slice(0, 10)
	const ss = document.querySelector(".ss")
	ss.textContent = `Selected statistics uploaded at: ${final_date}`

	// separate names and values
	const chart_data_1 = Object.keys(saved_statistics[number])
	const chart_data_2 = Object.values(saved_statistics[number])

	console.log("Chart names:")
	console.log(chart_data_1)
	console.log("Chart values:")
	console.log(chart_data_2)

	// make data

	const data = chart_data_2.reduce((a, b) => {
		return a + b
	}, 0)

	console.log(data)

	/// ? make the statistics
	const title = chart_data_1.length

	// calculate statitics
	const watchtime_minute = Math.floor(data * 50)
	const watchtime_hour = Math.floor(watchtime_minute / 60)
	const watchtime_day = Math.floor(watchtime_hour / 24)

	console.log(`Title: ${title}`)
	console.log(`Watchtime_m: ${watchtime_minute}`)
	console.log(`Watchtime_h: ${watchtime_hour}`)
	console.log(`Watchtime_d: ${watchtime_day}`)

	// calculate favourite statistics
	const max_number = Math.max(...chart_data_2)
	console.log(max_number)
	const max_title = chart_data_2.indexOf(max_number)
	console.log(max_title)

	const favourite_title = chart_data_1[max_title]
	const favourite_watchtime_minute = Math.floor(max_number * 50)
	const favourite_episodes = max_number
	const favourite_watchtime_hour = Math.floor(favourite_watchtime_minute / 60)

	// animated counters
	const c1 = new CountUp("h31", 0, title)
	const c2 = new CountUp("h32", 0, watchtime_minute)
	const c3 = new CountUp("h33", 0, watchtime_hour)
	const c4 = new CountUp("h34", 0, watchtime_day)

	const c5 = (document.getElementById("h35").textContent = favourite_title)
	const c6 = new CountUp("h36", 0, favourite_watchtime_minute)
	const c7 = new CountUp("h37", 0, favourite_episodes)
	const c8 = new CountUp("h38", 0, favourite_watchtime_hour)

	c1.start()
	c2.start()
	c3.start()
	c4.start()
	c6.start()
	c7.start()
	c8.start()

	// set the elements
	const foo = document.querySelector("footer")
	const thr = document.querySelector(".three")
	const fou = document.querySelector(".four")
	const fiv = document.querySelector(".five")
	const but = document.querySelector("#b1")
	foo.style.bottom = "-10px"
	thr.style.display = "block"
	fou.style.display = "block"
	fiv.style.display = "block"
	but.style.display = "inline"

	// ? make random chart colors
	const colors = []

	const rgb_start = () => {
		for (let i = 0; i < chart_data_1.length; i++) {
			let rgb_color0 = ""
			let rgb_color1 = ""
			let rgb_color2 = ""

			for (let i = 0; i < 3; i++) {
				const rgb_randomizer = Math.floor(Math.random() * 256)

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

			const rgb = `rgb(${rgb_color0},${rgb_color1},${rgb_color2})`

			colors.push(rgb)
		}
	}

	rgb_start()

	console.log("Colors:")
	console.log(colors)

	// ? Make the chart
	const mychart = document.getElementById("chart").getContext("2d")
	Chart.defaults.global.defaultFontColor = "white"

	const thechart = new Chart(mychart, {
		type: "pie",
		data: {
			labels: chart_data_1,
			datasets: [
				{
					label: "numbers",
					data: chart_data_2,
					backgroundColor: colors,
					borderWidth: 3,
					hoverBorderWidth: 9,
				},
			],
		},
		options: {
			responsive: false,
			maintainAspectRatio: false,
		},
	})
}
