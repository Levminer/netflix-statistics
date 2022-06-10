import { useRouter } from "next/router"
import Link from "next/link"

const Header = () => {
	const router = useRouter()

	return (
		<>
			<header className="sticky top-0 z-50 bg-gray-900 text-gray-50">
				<div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
					<span className="title-font text-ns-red mb-4 flex items-center font-bold md:mb-0">
						<Link href="/">
							<a>
								<img src="img/img_32.ico" alt="Netflix Statistics Logo" />
							</a>
						</Link>

						<Link href="/">
							<a className="ml-3 text-xl duration-200 ease-in hover:text-white">Netflix Statistics</a>
						</Link>
					</span>
					<nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
						<Link href="/">
							<a className="hover:text-ns-red mr-5 text-2xl duration-200 ease-in" id={router.pathname == "/" ? "link" : ""}>
								Home
							</a>
						</Link>
						<Link href="/en">
							<a className="hover:text-ns-red mr-5 text-2xl duration-200 ease-in" id={router.pathname == "/en" ? "link" : ""}>
								English
							</a>
						</Link>
						<Link href="/hu">
							<a className="hover:text-ns-red mr-5 text-2xl duration-200 ease-in" id={router.pathname == "/hu" ? "link" : ""}>
								Magyar
							</a>
						</Link>
					</nav>
					<a className="button mt-5 md:mt-0" target="_blank" rel="noopener" href="https://www.netflix.com/viewingactivity">
						Your statistics
					</a>
				</div>
			</header>
		</>
	)
}

export default Header
