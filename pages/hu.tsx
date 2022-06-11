/* cSpell:disable */
import { loadFile } from "../src/convert"

const HU = () => {
	const start = () => {
		// @ts-ignore
		document.getElementById("file").click()
	}

	return (
		<>
			<div className="m-auto">
				<section className="text-white body-font bg-gray-700 w-2/3 m-auto mt-32 mb-44 rounded-2xl">
					<div className="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
						<div className="text-center lg:w-2/3 w-full">
							<h1 className="title-font text-5xl mb-4 font-bold text-ns-red">Netflix Statistics</h1>
							<p className="mb-4 leading-relaxed text-xl">Kiváncsi vagy hogy eddig mennyi időt töltöttél az életedből netflixezéssel? Ha tudni szeretnéd nincs is más dolgod mint hogy követed a használati utasítást!</p>
							<h2 className="title-font text-4xl mb-4 font-bold text-ns-red">Utasítások</h2>
							<p className="leading-relaxed text-xl">1. Először is le kell töltened a Netflix profilodról a statisztikáidat.</p>
							<p className="leading-relaxed text-xl flex flex-row gap-3 justify-center">
								<a className="text-ns-red underline hover:text-white duration-200" target="_blank" rel="noopener" href="https://help.netflix.com/en/node/101917">
									Írásos segítség
								</a>
								<a className="text-ns-red underline hover:text-white duration-200" target="_blank" rel="noopener" href="https://www.netflix.com/viewingactivity">
									Link ha be vagy jelentkezve
								</a>
							</p>
							<p className="leading-relaxed text-xl">2. Lentebb válaszd ki a fájlt amit letöltöttél.</p>
							<p className="leading-relaxed text-xl">3. Ha mindent jól csináltál csak görgess lejjebb és már látod is a statisztikákat.</p>
							<h2 className="title-font text-4xl mt-2 mb-4 font-bold text-ns-red">Válaszd ki a fájlt</h2>
							<input type="file" className="hidden" id="file" onChange={loadFile} accept=".csv" />
							<div className="flex flex-row justify-center">
								<button type="button" id="input" onClick={start} className="button text-2xl">
									Válassz egy fájlt
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
							<h2 className="title-font text-4xl mb-4 font-bold text-ns-red">Megtekintési statisztika:</h2>
							<p className="leading-relaxed text-xl mb-4">Íme az eddigi Netflix statisztikád. Szerintem meglepődtél.</p>
							<h2 className="title-font text-4xl mb-2 font-bold text-ns-red">Megtekintett címek</h2>
							<h3 id="h31" className="leading-relaxed text-6xl font-bold">
								0
							</h3>
							<p className="leading-relaxed text-xl -mt-5 font-bold">Cím</p>
							<h2 className="title-font text-4xl mb-2 mt-2 font-bold text-ns-red">Eddig eltöltött idő</h2>
							<div className="flex flex-col gap-10 justify-center md:flex-row">
								<div className="flex flex-col">
									<h3 id="h32" className="leading-relaxed text-6xl font-bold">
										0
									</h3>
									<h2 className="leading-relaxed text-xl -mt-5 font-bold">Percben</h2>
								</div>
								<div className="flex flex-col">
									<h3 id="h33" className="leading-relaxed text-6xl font-bold">
										0
									</h3>
									<h2 className="leading-relaxed text-xl -mt-5 font-bold">Órában</h2>
								</div>
								<div className="flex flex-col">
									<h3 id="h34" className="leading-relaxed text-6xl font-bold">
										0
									</h3>
									<h2 className="leading-relaxed text-xl -mt-5 font-bold">Napban</h2>
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
							<h2 className="title-font text-4xl mb-4 font-bold text-ns-red">Kedvenc statisztika</h2>
							<p className="leading-relaxed text-xl mb-4">Íme az eddigi Netflix statisztikád. Csak ne nézz meg mégegy részt.</p>
							<h2 className="title-font text-4xl mb-2 font-bold text-ns-red">Legtöbbet megtekintett cím</h2>
							<h3 id="h35" className="leading-relaxed text-6xl font-bold">
								0
							</h3>
							<p className="leading-relaxed text-xl -mt-5 font-bold">Kedvenc cím</p>
							<h2 className="title-font text-4xl mb-2 mt-2 font-bold text-ns-red">Eddig eltöltött idő</h2>
							<div className="flex flex-col gap-10 justify-center md:flex-row">
								<div className="flex flex-col">
									<h3 id="h36" className="leading-relaxed text-6xl font-bold">
										0
									</h3>
									<h2 className="leading-relaxed text-xl -mt-5 font-bold">Percben</h2>
								</div>
								<div className="flex flex-col">
									<h3 id="h37" className="leading-relaxed text-6xl font-bold">
										0
									</h3>
									<h2 className="leading-relaxed text-xl -mt-5 font-bold">Epizódok</h2>
								</div>
								<div className="flex flex-col">
									<h3 id="h38" className="leading-relaxed text-6xl font-bold">
										0
									</h3>
									<h2 className="leading-relaxed text-xl -mt-5 font-bold">Órában</h2>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>

			<div className="five hidden">
				<section className="text-white body-font bg-gray-700 w-2/3 m-auto mt-32 mb-32 rounded-2xl">
					<div className="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
						<div className="text-center lg:w-2/3 w-full">
							<h2 className="title-font text-4xl mb-4 font-bold text-ns-red">A leghosszab napod a Netflixen</h2>
							<p className="leading-relaxed text-xl mb-4">A nap nagy részét Netflixezéssel töltötted.</p>
							<h2 className="title-font text-4xl mb-2 text-ns-red font-bold">Cím</h2>
							<h3 id="longestDay" className="leading-relaxed text-6xl font-bold">
								0
							</h3>
							<p className="leading-relaxed text-xl -mt-5 font-bold">Leghosszab napod</p>
							<h2 className="title-font text-4xl mb-2 mt-2 font-bold text-ns-red">Eltöltött idő</h2>
							<div className="flex flex-col gap-10 justify-center md:flex-row">
								<div className="flex flex-col">
									<h3 id="longestDayM" className="leading-relaxed text-6xl font-bold">
										0
									</h3>
									<h2 className="leading-relaxed text-xl -mt-5 font-bold">Percben</h2>
								</div>
								<div className="flex flex-col">
									<h3 id="longestDayT" className="leading-relaxed text-6xl font-bold">
										0
									</h3>
									<h2 className="leading-relaxed text-xl -mt-5 font-bold">Cím</h2>
								</div>
								<div className="flex flex-col">
									<h3 id="longestDayH" className="leading-relaxed text-6xl font-bold">
										0
									</h3>
									<h2 className="leading-relaxed text-xl -mt-5 font-bold">Órában</h2>
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
							<h2 className="title-font text-4xl mb-4 font-bold text-ns-red">Statisztika diagramm</h2>
							<p className="leading-relaxed text-xl mb-4">Itt egy szép diagramm hogy miből mennyit néztél meg.</p>
							<div className="flex justify-center">
								<canvas id="chart" style={{ position: "relative", height: "1000px", width: "1000px" }}></canvas>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}

export default HU
