import { loadFile } from "../src/convert"

const EN = () => {
	const start = () => {
		// @ts-ignore
		document.getElementById("file").click()
	}

	return (
		<>
			<div className="m-auto">
				<section className="text-white body-font bg-gray-700 w-2/3 m-auto mt-32 mb-32 rounded-2xl">
					<div className="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
						<div className="text-center lg:w-2/3 w-full">
							<h1 className="title-font text-5xl mb-4 font-bold text-ns-red">Netflix Statistics</h1>
							<p className="mb-4 leading-relaxed text-xl">
								Wondering how much time you spent watching Netflix in your life so far? <br />
								If you want to know you have to follow the instructions!
							</p>
							<h2 className="title-font text-4xl mb-4 font-bold text-ns-red">Instructions</h2>
							<p className="leading-relaxed text-xl">1. First you need to download your statistics from your Netflix profile.</p>
							<p className="leading-relaxed text-xl flex flex-row gap-3 justify-center">
								<a className="text-ns-red underline hover:text-white duration-200" target="_blank" rel="noopener" href="https://help.netflix.com/en/node/101917">
									Written help
								</a>
								<a className="text-ns-red underline hover:text-white duration-200" target="_blank" rel="noopener" href="https://www.netflix.com/viewingactivity">
									Link if your logged in
								</a>
							</p>
							<p className="leading-relaxed text-xl">2. Select the file you downloaded below.</p>
							<p className="leading-relaxed text-xl">3. If you did everything right just scroll down and you can already see the stats.</p>
							<h2 className="title-font text-4xl mt-2 mb-4 font-bold text-ns-red">Choose the file</h2>
							<input type="file" className="hidden" id="file" onChange={loadFile} accept=".csv" />
							<div className="flex flex-row justify-center">
								<button type="button" id="input" onClick={start} className="button text-2xl">
									Choose a file
								</button>
							</div>
						</div>
					</div>
				</section>
			</div>

			<div className="two hidden">
				<section className="text-white body-font bg-gray-700 w-2/3 m-auto mt-32 mb-32 rounded-2xl">
					<div className="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
						<div className="text-center lg:w-2/3 w-full">
							<h2 className="title-font text-4xl mb-4 font-bold text-ns-red">Viewing statistics</h2>
							<p className="leading-relaxed text-xl mb-4">Here are your Netflix stats so far. I think you are surprised.</p>
							<h2 className="title-font text-4xl mb-2 text-ns-red font-bold">Viewed titles</h2>
							<h3 id="h31" className="leading-relaxed text-6xl font-bold">
								0
							</h3>
							<p className="leading-relaxed text-xl -mt-5 font-bold">Titles</p>
							<h2 className="title-font text-4xl mb-2 mt-2 font-bold text-ns-red">Time spent</h2>
							<div className="flex flex-col gap-10 justify-center md:flex-row">
								<div className="flex flex-col">
									<h3 id="h32" className="leading-relaxed text-6xl font-bold">
										0
									</h3>
									<h2 className="leading-relaxed text-xl -mt-5 font-bold">In minutes</h2>
								</div>
								<div className="flex flex-col">
									<h3 id="h33" className="leading-relaxed text-6xl font-bold">
										0
									</h3>
									<h2 className="leading-relaxed text-xl -mt-5 font-bold">In hours</h2>
								</div>
								<div className="flex flex-col">
									<h3 id="h34" className="leading-relaxed text-6xl font-bold">
										0
									</h3>
									<h2 className="leading-relaxed text-xl -mt-5 font-bold">In days</h2>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>

			<div className="three hidden">
				<section className="text-white body-font bg-gray-700 w-2/3 m-auto mt-32 mb-32 rounded-2xl">
					<div className="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
						<div className="text-center lg:w-2/3 w-full">
							<h2 className="title-font text-4xl mb-4 font-bold text-ns-red">Favorite statistics</h2>
							<p className="leading-relaxed text-xl mb-4">Here are your favorite Netflix show stats. Just don't watch one more episode.</p>
							<h2 className="title-font text-4xl mb-2 font-bold text-ns-red">Most viewed title</h2>
							<h3 id="h35" className="leading-relaxed text-6xl font-bold">
								0
							</h3>
							<p className="leading-relaxed text-xl -mt-5 font-bold">Favorite title</p>
							<h2 className="title-font text-4xl mb-2 mt-2 text-ns-red font-bold">Time spent</h2>
							<div className="flex flex-col gap-10 justify-center md:flex-row">
								<div className="flex flex-col">
									<h3 id="h36" className="leading-relaxed text-6xl font-bold">
										0
									</h3>
									<h2 className="leading-relaxed text-xl -mt-5 font-bold">In minutes</h2>
								</div>
								<div className="flex flex-col">
									<h3 id="h37" className="leading-relaxed text-6xl font-bold">
										0
									</h3>
									<h2 className="leading-relaxed text-xl -mt-5 font-bold">Episodes</h2>
								</div>
								<div className="flex flex-col">
									<h3 id="h38" className="leading-relaxed text-6xl font-bold">
										0
									</h3>
									<h2 className="leading-relaxed text-xl -mt-5 font-bold">In hours</h2>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>

			<div className="four hidden">
				<section className="text-white body-font bg-gray-700 w-2/3 m-auto mt-32 mb-32 rounded-2xl">
					<div className="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
						<div className="text-center lg:w-2/3 w-full">
							<h2 className="title-font text-4xl mb-4 font-bold text-ns-red">Statistics chart</h2>
							<p className="leading-relaxed text-xl mb-4">Here is a nicely drawn chart from your statistics.</p>
							<div className="flex justify-center">
								<canvas id="chart" className="chart"></canvas>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}

export default EN
