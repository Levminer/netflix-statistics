import { loadFile } from "../src/convert"

const EN = () => {
	const start = () => {
		// @ts-ignore
		document.getElementById("file").click()
	}

	return (
		<div className="bg-gray-900 p-5 space-y-5 min-h-screen">
			{/* hero */}
			<div className="text-white body-font bg-gray-700 w-full m-auto rounded-2xl">
				<div className="flex p-5 flex-col">
					<div className="flex flex-wrap md:flex-nowrap justify-around gap-3">
						<div>
							<h1 className="title-font text-5xl mb-4 font-bold text-ns-red">Netflix Statistics</h1>
							<p className="mb-4 leading-relaxed text-xl">
								Wondering how much time you spent watching Netflix in your life so far? <br />
								If you want to know you have to follow the instructions!
							</p>
						</div>

						<div>
							<h2 className="title-font text-4xl mb-4 font-bold text-ns-red">Instructions</h2>
							<p className="leading-relaxed text-xl">1. First you need to download your statistics from your Netflix profile.</p>
							<p className="leading-relaxed text-xl flex flex-row gap-3">
								<a
									className="text-ns-red underline hover:text-white duration-200"
									target="_blank"
									rel="noopener"
									href="https://help.netflix.com/en/node/101917"
								>
									Written help
								</a>
								<a
									className="text-ns-red underline hover:text-white duration-200"
									target="_blank"
									rel="noopener"
									href="https://www.netflix.com/viewingactivity"
								>
									Link if your logged in
								</a>
							</p>
							<p className="leading-relaxed text-xl">2. Select the file you downloaded below.</p>
							<p className="leading-relaxed text-xl">
								3. If you did everything right just scroll down and you can already see the stats.
							</p>
						</div>
					</div>

					<div className="flex justify-center items-baseline flex-wrap mx-auto space-x-5 mt-10 bg-gray-600 p-5 rounded-xl">
						<h2 className="text-4xl relative top-1 font-bold text-ns-red">Choose the file</h2>
						<input type="file" className="hidden" id="file" onChange={loadFile} accept=".csv" />
						<button type="button" id="input" onClick={start} className="button text-2xl">
							Choose a file
						</button>
					</div>
				</div>
			</div>

			{/* ROW 1  */}
			<div className="row1 hidden flex-col gap-5 sm:flex-row">
				<div className="mx-auto sm:w-1/2 w-full flex p-5 flex-col space-y-3 text-white body-font bg-gray-700 rounded-2xl">
					<div>
						<h2 className="title-font text-4xl mb-2 text-ns-red font-bold">Viewed titles</h2>
						<h3 id="titles" className="leading-relaxed text-6xl font-bold">
							0
						</h3>
					</div>

					<div>
						<h2 className="title-font text-4xl my-2 font-bold text-ns-red">Time spent</h2>
						<div className="flex flex-col gap-10 justify-evenly md:flex-row">
							<div className="flex flex-col items-center">
								<h3 id="titlesM" className="leading-relaxed text-6xl font-bold">
									0
								</h3>
								<h2 className="leading-relaxed text-xl -mt-5 font-bold">In minutes</h2>
							</div>
							<div className="flex flex-col items-center">
								<h3 id="titlesH" className="leading-relaxed text-6xl font-bold">
									0
								</h3>
								<h2 className="leading-relaxed text-xl -mt-5 font-bold">In hours</h2>
							</div>
							<div className="flex flex-col items-center">
								<h3 id="titlesD" className="leading-relaxed text-6xl font-bold">
									0
								</h3>
								<h2 className="leading-relaxed text-xl -mt-5 font-bold">In days</h2>
							</div>
						</div>
					</div>
				</div>

				<div className="mx-auto sm:w-1/2 w-full flex p-5 flex-col space-y-3 text-white body-font bg-gray-700 rounded-2xl">
					<div>
						<h2 className="title-font text-4xl font-bold text-ns-red">Favorite title</h2>

						<p id="h35" className="leading-relaxed text-6xl font-bold">
							0
						</p>
					</div>

					<div>
						<h2 className="title-font text-4xl my-2 text-ns-red font-bold">Time spent</h2>
						<div className="flex flex-col gap-10 md:flex-row justify-evenly">
							<div className="flex flex-col items-center">
								<h3 id="h36" className="leading-relaxed text-6xl font-bold">
									0
								</h3>
								<h2 className="leading-relaxed text-xl -mt-5 font-bold">In minutes</h2>
							</div>
							<div className="flex flex-col items-center">
								<h3 id="h37" className="leading-relaxed text-6xl font-bold">
									0
								</h3>
								<h2 className="leading-relaxed text-xl -mt-5 font-bold">Episodes</h2>
							</div>
							<div className="flex flex-col items-center">
								<h3 id="h38" className="leading-relaxed text-6xl font-bold">
									0
								</h3>
								<h2 className="leading-relaxed text-xl -mt-5 font-bold">In hours</h2>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* ROW 2  */}
			<div className="row2 hidden flex-col gap-5 sm:flex-row">
				<div className="mx-auto sm:w-1/2 w-full flex p-5 flex-col space-y-3 text-white body-font bg-gray-700 rounded-2xl">
					<div>
						<div className="container mx-auto flex p-5 items-center justify-center flex-col">
							<div className="w-full">
								<h2 className="title-font text-4xl mb-2 text-ns-red font-bold">Consecutive watching days</h2>
								<h3 id="longestStreak" className="leading-relaxed text-6xl font-bold">
									0
								</h3>
								<h2 className="title-font text-4xl mb-2 mt-2 font-bold text-ns-red">Streak between</h2>
								<div className="flex flex-wrap flex-row 2xl:flex-nowrap gap-3 space-x-5 justify-evenly">
									<div className="flex flex-col items-center">
										<h3 id="longestStreakT" className="leading-relaxed text-6xl font-bold">
											0
										</h3>
										<h2 className="leading-relaxed text-xl -mt-5 font-bold">Watching streak between</h2>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mx-auto sm:w-1/2 w-full flex p-5 flex-col space-y-3 text-white body-font bg-gray-700 rounded-2xl">
					<div>
						<div>
							<h2 className="title-font text-4xl mb-2 text-ns-red font-bold">Your longest Netflix day</h2>
							<h3 id="longestDay" className="leading-relaxed text-6xl font-bold">
								0
							</h3>
						</div>

						<div>
							<h2 className="title-font text-4xl my-2 font-bold text-ns-red">Time spent</h2>
							<div className="flex flex-col gap-10 justify-evenly md:flex-row">
								<div className="flex flex-col items-center">
									<h3 id="longestDayM" className="leading-relaxed text-6xl font-bold">
										0
									</h3>
									<h2 className="leading-relaxed text-xl -mt-5 font-bold">In minutes</h2>
								</div>
								<div className="flex flex-col items-center">
									<h3 id="longestDayT" className="leading-relaxed text-6xl font-bold">
										0
									</h3>
									<h2 className="leading-relaxed text-xl -mt-5 font-bold">Title</h2>
								</div>
								<div className="flex flex-col items-center">
									<h3 id="longestDayH" className="leading-relaxed text-6xl font-bold">
										0
									</h3>
									<h2 className="leading-relaxed text-xl -mt-5 font-bold">In Hours</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* ROW 3 */}
			<div className="row3 hidden text-white body-font bg-gray-700 w-full m-auto mt-32 mb-32 rounded-2xl">
				<div className="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
					<div className="text-center lg:w-2/3 w-full">
						<h2 className="title-font text-4xl mb-4 font-bold text-ns-red">Statistics chart</h2>
						<p className="leading-relaxed text-xl mb-4">Here is a nicely drawn chart from your statistics.</p>
						<div className="flex justify-center">
							<canvas id="chart" style={{ position: "relative", height: "800px", width: "800px" }}></canvas>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EN
