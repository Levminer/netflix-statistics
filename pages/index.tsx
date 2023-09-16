/* cSpell:disable */
import Link from "next/link"

const Home = () => {
	return (
		<div className="container m-auto min-h-screen">
			<section className="body-font m-auto mt-32 mb-64 w-2/3 rounded-2xl bg-gray-700 text-white">
				<div className="container mx-auto flex flex-col items-center justify-center px-5 py-20">
					<img className="mb-6" alt="hero" src="img/img_90.png" />
					<div className="w-full text-center lg:w-2/3">
						<h1 className="title-font text-ns-red mb-4 text-5xl font-bold">Netflix Statistics</h1>
						<p className="mb-8 text-2xl leading-relaxed">Please choose language! / Kérlek válassz nyelvet!</p>
						<div className="flex justify-center gap-3">
							<Link className="button" href="/en">
								View you statistics
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home
