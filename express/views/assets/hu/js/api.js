let api = () => {
	let save_confirm = confirm("Biztos el akarod menteni a feltöltött statisztikát?")

	if (save_confirm == true) {
		if (supporter == true) {
			if (max_statistics > saved_statistics) {
				const options = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ results, id }),
				}

				fetch("/api/save-statistics", options).then((res) => {
					console.log(res)
				})

				alert(
					"A statisztika sikeresen el lett metve! Már láthatod is a vezérlőpultodon! A vezérlőpulton meg tudod nézni az összes elmentett statisztikád!"
				)
				window.open("/account/login")
				location.reload()
			} else {
				alert(
					"A statisztika nem lett elmentve! Fejleszd a fiókod! Elérted a fiókod maximális staitisztikáját, ha szeretnél többet tárolni fejleszd a fiókod!"
				)
				window.open("https://www.patreon.com/levminer")
			}
		} else if (supporter == false) {
			alert(
				"A statisztika nem lett elmentve! Ez egy fizetős funció! Át leszel irányítva a Patreon oldalamra ahol meg tudod venni ezt a funkciót!"
			)
			window.open("https://www.patreon.com/levminer")
		} else {
			alert(
				"A statisztika nem lett elmentve! Kérlek jelentkezz be! Át leszel irányítva egy új lapra, ha bejelentkeztél gyere vissza ide és nyomj F5-öt vagy frissitsd az oldalt!"
			)
			window.open("/account/login")
			location.reload()
		}
	}
}
