// version
const port = window.location.port

const version = document.querySelector(".ver")
const ver = version.textContent

if (port == 6969) {
	version.innerHTML = `Dev ${ver}`
} else {
	version.innerHTML = `Main ${ver}`
}
