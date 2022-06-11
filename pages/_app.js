import "../styles/index.css"
import Header from "../components/header.tsx"
import Footer from "../components/footer.tsx"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	)
}

export default MyApp

