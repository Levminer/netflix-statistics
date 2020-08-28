// version
let port = window.location.port

let version = document.querySelector(".ver")
let ver = version.textContent

if (port == 6969) {
	version.innerHTML = `Dev ${ver}`
} else {
	version.innerHTML = `Main ${ver}`
}
