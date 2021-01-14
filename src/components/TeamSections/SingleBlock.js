import React from "react";

export default (props) => {
	return (
		<div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
			<div className="mb-12 space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl text-center">
				<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
					The Founder
				</h2>
				<p className="text-xl text-gray-500">
					Risus velit condimentum vitae tincidunt tincidunt. Mauris
					ridiculus fusce amet urna nunc. Ut nisl ornare diam in.
				</p>
			</div>
			<div>
				<div className="relative overflow-hidden flex flex-col md:flex-row bg-white shadow-2xl rounded-lg p-5 max-w-4xl mx-auto">
					<div className="md:w-1/4 p-4">
						{/* <!-- Image --> */}
						<div className="w-32 md:w-auto mx-auto mb-6">
							<div className="aspect-w-1 aspect-h-1">
								<img
									className="object-cover shadow-lg rounded-lg"
									src="https://backend.v3.capital-azur.com/sites/default/files/2020-09/president.png"
									alt={"YOHAN LABAH"}
								/>
							</div>
						</div>
						<div className="leading-6 font-medium space-y-1 text-center md:ltr:text-left md:rtl:text-right">
							<h3 className="text-lg">YOHAN LABAH</h3>
							<p className="text-sm text-indigo-600">
								Président, Capital Azur
							</p>
						</div>
					</div>
					<div className="md:w-3/4 p-4">
						<div className="space-y-4">
							<h2 className="text-3xl font-bold">
								VOTRE SATISFACTION, NOTRE PASSION
							</h2>
							<div className="text-gray-900 prose">
								<p>
									Si le digital banking n'est pas né en
									Afrique, il y évolue à grande vitesse grâce
									à la forte progression des réseaux mobiles
									et au déploiement du haut débit. C’est dans
									ce contexte que Capital Azur a vu le jour,
									afin de piloter le changement du paradigme «
									client » dans le continent et de permettre
									l’inclusion financière de chaque citoyen des
									pays africains. Avec le support de nos
									partenaires Start-ups révolutionnant le
									modèle bancair dans les pays du continent.
								</p>
								<p>
									Aujourd’hui, nous sommes présent au niveau
									de 15 pays africains et accélérons notre
									expansion à travers le continent. Nous nous
									efforçons chaque jour de tenir nos 3
									engagements à l’ensemble de nos clientèles
									(Particuliers, Professionnels, Entreprises
									et Corporates) :
								</p>
								<ul>
									<li>
										<strong>1er engagement :</strong> Offrir
										des services différenciant - aller
										au-delà du transactionnel
									</li>
									<li>
										<strong>2ème engagement :</strong>{" "}
										Développer une expérience client alliant
										simplicité et excellence
									</li>
									<li>
										<strong>3e engagement :</strong>{" "}
										S’appuyer sur les dernières technologies
										pour soutenir la croissance en Afrique.
									</li>
								</ul>
								<p>
									Parce que votre satisfaction est notre
									leitmotiv, notre drive quotidien, notre
									“WHY”, et notre <a href="#!">passion</a>.
								</p>
							</div>
							<ul className="flex rtl:space-x-reverse space-x-5">
								<li>
									<a
										href="#!"
										className="text-gray-400 hover:text-gray-500"
									>
										<span className="sr-only">Twitter</span>
										<svg
											className="w-5 h-5"
											fill="currentColor"
											viewBox="0 0 20 20"
											aria-hidden="true"
										>
											<path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
										</svg>
									</a>
								</li>
								<li>
									<a
										href="#!"
										className="text-gray-400 hover:text-gray-500"
									>
										<span className="sr-only">
											LinkedIn
										</span>
										<svg
											className="w-5 h-5"
											fill="currentColor"
											viewBox="0 0 20 20"
											aria-hidden="true"
										>
											<path
												fillRule="evenodd"
												d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
												clipRule="evenodd"
											/>
										</svg>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<svg
						className="text-indigo absolute -bottom-2 ltr:right-2 rtl:left-2 w-44 h-auto opacity-30 pointer-events-none transform-gpu rtl:-scale-x-100"
						fill="currentColor"
						width={64}
						height={(768 * 64) / 896}
						viewBox="0 0 896 768"
					>
						<path d="M413.539 108.314v379.068q0 56-21.808 106.883t-58.96 88.036-88.036 58.96-106.882 21.808h-34.459q-14 0-24.23-10.231t-10.231-24.23v-68.922q0-14 10.231-24.23t24.23-10.231h34.459q57.076 0 97.46-40.384t40.384-97.46v-17.231q0-21.538-15.076-36.614t-36.614-15.076h-120.613q-43.075 0-73.229-30.154t-30.154-73.229v-206.765q0-43.075 30.154-73.229t73.229-30.154h206.765q43.075 0 73.229 30.154t30.154 73.229zM895.988 108.314v379.068q0 56-21.808 106.883t-58.96 88.036-88.036 58.96-106.883 21.808h-34.459q-14 0-24.23-10.231t-10.231-24.23v-68.922q0-14 10.231-24.23t24.23-10.231h34.459q57.076 0 97.46-40.384t40.384-97.46v-17.231q0-21.538-15.077-36.614t-36.614-15.076h-120.613q-43.075 0-73.229-30.154t-30.154-73.229v-206.765q0-43.075 30.154-73.229t73.229-30.154h206.765q43.075 0 73.229 30.154t30.154 73.229z" />
					</svg>
				</div>
			</div>
		</div>
	);
};
