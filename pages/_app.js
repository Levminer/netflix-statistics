import "../styles/index.css"
import Script from "next/script"
import Header from "../components/header.tsx"
import Footer from "../components/footer.tsx"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Script defer src="https://cdnjs.cloudflare.com/ajax/libs/countup.js/1.8.2/countUp.min.js"></Script>
			<Script defer src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.bundle.js"></Script>

			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	)
}

export default MyApp

