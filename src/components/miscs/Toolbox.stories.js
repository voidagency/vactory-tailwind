import React from "react";

export default {
	title: "Elements/Toolbox",
	parameters: {
		backgrounds: {
			default: "grey",
		},
	},
};

export const IconsOnly = () => {
	return (
		<div className="fixed inset-0 overflow-hidden">
			<nav className="absolute right-0 top-1/2 transform -translate-y-1/2">
				<ul className="flex flex-col space-y-0.5">
					<li>
						<a
							href="#!"
							className="block border-2 border-indigo bg-white rounded-l-lg p-3"
							title="Private space"
						>
							<svg
								className="h-8 w-8 text-indigo"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
								/>
							</svg>
							<span className="sr-only">Private space</span>
						</a>
					</li>
					<li>
						<a
							href="#!"
							className="block border-2 border-indigo bg-white rounded-l-lg p-3"
							title="Find an agency"
						>
							<svg
								className="h-8 w-8 text-indigo"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
							<span className="sr-only">Find an agency</span>
						</a>
					</li>
					<li>
						<a
							href="#!"
							className="block border-2 border-indigo bg-white rounded-l-lg p-3"
							title="need help?"
						>
							<svg
								className="h-8 w-8 text-indigo"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<span className="sr-only">Get help</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export const Sliding = () => {
	return (
		<div className="fixed inset-0 overflow-hidden">
			<nav className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-36">
				<ul className="flex flex-col space-y-0.5">
					<li>
						<a
							href="#!"
							className="flex rounded-l-lg delay-75 transform hover:-translate-x-36 focus:translate-x-0 transition"
							title="Find an agency"
						>
							<div className="border-2 border-indigo bg-white rounded-l-md mr-0.5">
								<svg
									className="h-6 w-6 text-indigo m-2"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
							</div>
							<div className="w-36 bg-indigo text-white flex items-center">
								<span className="block m-2">
									Find an agency
								</span>
							</div>
						</a>
					</li>
					<li>
						<a
							href="#!"
							className="flex rounded-l-lg delay-75 transform hover:-translate-x-36 focus-within:translate-x-0 transition"
							title="Get help"
						>
							<div className="border-2 border-indigo bg-white rounded-l-md mr-0.5">
								<svg
									className="h-6 w-6 text-indigo m-2"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<div className="w-36 bg-indigo text-white flex items-center">
								<span className="block m-2">Get help</span>
							</div>
						</a>
					</li>
					<li>
						<a
							href="#!"
							className="flex rounded-l-lg delay-75 transform hover:-translate-x-36 focus-within:translate-x-0 transition"
							title="Private space"
						>
							<div className="border-2 border-indigo bg-white rounded-l-md mr-0.5">
								<svg
									className="h-6 w-6 text-indigo m-2"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
									/>
								</svg>
							</div>
							<div className="w-36 bg-indigo text-white flex items-center">
								<span className="block m-2">Private space</span>
							</div>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export const IconAndLabel = () => {
	return (
		<div className="fixed inset-0 overflow-hidden">
			<nav className="absolute bottom-0 left-1/2 -translate-x-1/2 md:bottom-auto md:left-auto md:right-0 md:translate-x-0 md:top-1/2 md:-translate-y-1/2 transform rounded-lg">
				<ul className="grid grid-cols-3 gap-0.5 md:grid-rows-3 md:grid-cols-1 mb-0.5 md:mb-0 md:mr-0.5">
					<li className="">
						<a
							href="#!"
							className="flex flex-col items-center shadow-md bg-white rounded-lg p-2"
							title="Private space"
						>
							<svg
								className="h-4 w-4 p-2 box-content bg-indigo-100 text-indigo rounded-full"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
								/>
							</svg>
							<div className="mt-1 tracking-tight text-xs font-medium">
								Privacy
							</div>
						</a>
					</li>
					<li className="">
						<a
							href="#!"
							className="flex flex-col items-center shadow-md bg-white rounded-lg p-2"
							title="Find an agency"
						>
							<svg
								className="h-4 w-4 p-2 box-content bg-indigo-100 text-indigo rounded-full"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
							<div className="mt-1 tracking-tight text-xs font-medium">
								Map
							</div>
						</a>
					</li>
					<li className="">
						<a
							href="#!"
							className="flex flex-col items-center shadow-md bg-white rounded-lg p-2"
							title="need help?"
						>
							<svg
								className="h-4 w-4 p-2 box-content bg-indigo-100 text-indigo rounded-full"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<div className="mt-1 tracking-tight text-xs font-medium">
								Help
							</div>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export const Grouped = () => {
	return (
		<div className="fixed inset-0 overflow-hidden">
			<nav
				className={
					"absolute bottom-0 left-1/2 -translate-x-1/2 md:bottom-auto md:left-auto md:right-0 md:translate-x-0 md:top-1/2 md:-translate-y-1/2 transform rounded-xl " +
					"mb-0.5 md:mb-0 md:mr-0.5 bg-gradient-to-b md:bg-gradient-to-r from-white via-indigo-100 to-white"
				}
			>
				<ul className="grid grid-cols-3 gap-px md:grid-rows-3 md:grid-cols-1 shadow-md rounded-xl">
					<li className="">
						<a
							href="#!"
							className="flex flex-col items-center bg-white rounded-lg py-2 px-3 md:py-3 md:px-2"
							title="Privacy"
						>
							<svg
								className="h-4 w-4 p-2 box-content bg-indigo-100 text-indigo rounded-full"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
								/>
							</svg>
							<div className="mt-1 tracking-tight text-xs font-medium">
								Privacy
							</div>
						</a>
					</li>
					<li className="">
						<a
							href="#!"
							className="flex flex-col items-center bg-white rounded-lg py-2 px-3 md:py-3 md:px-2"
							title="Find an agency"
						>
							<svg
								className="h-4 w-4 p-2 box-content bg-indigo-100 text-indigo rounded-full"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
							<div className="mt-1 tracking-tight text-xs font-medium">
								Map
							</div>
						</a>
					</li>
					<li className="">
						<a
							href="#!"
							className="flex flex-col items-center bg-white rounded-lg py-2 px-3 md:py-3 md:px-2"
							title="need help?"
						>
							<svg
								className="h-4 w-4 p-2 box-content bg-indigo-100 text-indigo rounded-full"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<div className="mt-1 tracking-tight text-xs font-medium">
								Help
							</div>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};
