import React from "react";
import capitalAzurLogo from "../../images/capital-azur-indigo-700.svg";

export default (props) => {


	return (
		<div className="relative bg-gradient-to-b from-gray-50 to-gray" style={{minHeight: 2048}}>
			<div className="z-20 shadow sticky top-0 bg-white">
				<div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10 md:rtl:space-x-reverse">
					<div>
						<a href="#" className="flex">
							<span className="sr-only">Workflow</span>
							<img
								className="h-8 w-auto sm:h-10"
								src={capitalAzurLogo}
								alt=""
							/>
						</a>
					</div>
					<div className="ltr:-mr-2 rtl:-ml-2 -my-2 md:hidden">
						<button
						>
							<span className="sr-only">Open menu</span>
							{/* <!-- Heroicon name: menu --> */}
							<svg
								className="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
					<div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
						<nav className="flex space-x-10 rtl:space-x-reverse">
							<div className="relative">
								{/* <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */}
								<button
									type="button"
									className={`${
										0
											? "text-gray-900"
											: "text-gray-500"
									} group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
								>
									<span>Solutions</span>
									{/* <!--
										Heroicon name: chevron-down
										Item active: "text-gray-600", Item inactive: "text-gray-400"
									--> */}
									<svg
										className="ltr:ml-2 rtl:mr-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fillRule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
									</svg>
								</button>
							</div>
							<a
								href="#"
								className="text-base font-medium text-gray-500 hover:text-gray-900"
							>
								Pricing
							</a>
							<a
								href="#"
								className="text-base font-medium text-gray-500 hover:text-gray-900"
							>
								Docs
							</a>
							<div className="relative">
								{/* <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */}
								<button
									type="button"
									className={`${
										0
											? "text-gray-900"
											: "text-gray-500"
									} group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
								>
									<span>More</span>
									{/* <!--
										Heroicon name: chevron-down
										Item active: "text-gray-600", Item inactive: "text-gray-400"
									--> */}
									<svg
										className="ltr:ml-2 rtl:mr-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fillRule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
									</svg>
								</button>
							</div>
						</nav>
						<div className="flex items-center md:ltr:ml-12 md:rtl:mr-12">
							<a
								href="#"
								className="text-base font-medium text-gray-500 hover:text-gray-900"
							>
								Sign in
							</a>
							<a
								href="#"
								className="ltr:ml-8 rtl:mr-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
							>
								Sign up
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}