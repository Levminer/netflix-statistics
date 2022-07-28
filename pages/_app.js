import "../styles/index.css"
import Header from "../components/header.tsx"
import Footer from "../components/footer.tsx"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Levminer</title>
				<meta charSet="UTF-8" />
				<meta name="description" content="Netflix Statistics - If you want to know how much time you spent in your life watching Netflix!" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="shortcut icon" href="img/img_32.ico" type="image/x-icon" />
			</Head>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	)
}

export default MyApp

