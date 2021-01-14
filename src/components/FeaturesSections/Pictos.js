import React from "react";

export default (props) => {
	return (
		<div className="py-12 bg-white">
			<div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
				<h2 className="text-center text-3xl font-bold">Nos Valeurs.</h2>
				<p className="text-center mb-10 my-5 mt-4 max-w-3xl mx-auto text-xl text-gray-500">
					Capital Azur accompagne l’ensemble de sa clientèle dans
					leurs projets à toutes les étapes de leurs vie.
				</p>

				<div className="flex justify-between flex-wrap">
					<div className="border mx-auto flex flex-col justify-center items-center m-2.5 p-5 pb-6 shadow-2xl w-56 rounded-lg hover:-translate-y-8 transform-gpu transition duration-200 cursor-default my-8">
						<img
							src="https://backend.v3.capital-azur.com/sites/default/files/2020-11/cardservice1.png"
							className="object-contain w-24 h-24 mt-6 mb-8 rounded-full"
							width="115"
							height="115"
						/>
						<h3 className="font-bold">Comptes & Cartes</h3>
					</div>

					<div className="border mx-auto flex flex-col justify-center items-center m-2.5 p-5 pb-6 shadow-2xl w-56 rounded-lg hover:-translate-y-8 transform-gpu transition duration-200 cursor-default my-8">
						<img
							src="https://backend.v3.capital-azur.com/sites/default/files/2020-11/cardservice2.png"
							className="object-contain w-24 h-24 mt-6 mb-8 rounded-full"
							width="115"
							height="115"
						/>
						<h3 className="font-bold">Epargne</h3>
					</div>

					<div className="border mx-auto flex flex-col justify-center items-center m-2.5 p-5 pb-6 shadow-2xl w-56 rounded-lg hover:-translate-y-8 transform-gpu transition duration-200 cursor-default my-8">
						<img
							src="https://backend.v3.capital-azur.com/sites/default/files/2020-11/cardservice3.png"
							className="object-contain w-24 h-24 mt-6 mb-8 rounded-full"
							width="115"
							height="115"
						/>
						<h3 className="font-bold">Crédit</h3>
					</div>

					<div className="border mx-auto flex flex-col justify-center items-center m-2.5 p-5 pb-6 shadow-2xl w-56 rounded-lg hover:-translate-y-8 transform-gpu transition duration-200 cursor-default my-8">
						<img
							src="https://backend.v3.capital-azur.com/sites/default/files/2020-11/cardservice4.png"
							className="object-contain w-24 h-24 mt-6 mb-8 rounded-full"
							width="115"
							height="115"
						/>
						<h3 className="font-bold">Assurance</h3>
					</div>
				</div>
			</div>
		</div>
	);
};
