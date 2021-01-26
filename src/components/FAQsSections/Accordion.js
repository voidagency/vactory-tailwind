import React from "react";
import data from "./QAs.json"
// https://tailwindui.com/components/marketing/sections/faq-sections#component-8699d80b13ef524eb573e54b4d4b89d1


export default (props) => {
	return (
		<div className="bg-gray-50 dark:bg-black">
			<div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
				<div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
					<h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl">
						Frequently asked questions
					</h2>
					<dl className="mt-6 space-y-6 divide-y divide-gray-200">
						{data.map((qa, i) => {
							const [isOpen, setIsOpen] = React.useState(false);
							
							return (
								<div className="pt-6" key={i}>
									<dt className="text-lg">
										{/* <!-- Expand/collapse question button --> */}
										<button
											onClick={() => setIsOpen(!isOpen)}
											className="ltr:text-left rtl:text-right w-full flex justify-between items-start text-gray-400 dark:text-gray-600"
										>
											<span className="font-medium text-gray-900 dark:text-gray-100">
												{qa.Q}
											</span>
											<span className="ltr:ml-6 rtl:mr-6 h-7 flex items-center">
												{/* <!-- Heroicon name: chevron-down

											Open: "-rotate-180", Closed: "rotate-0"
											--> */}
												<svg
													className={` ${isOpen ? "-rotate-180" : "rotate-0" }  h-6 w-6 transform`}
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
														d="M19 9l-7 7-7-7"
													/>
												</svg>
											</span>
										</button>
									</dt>
									<dd className={`${isOpen ? "" : "hidden"} mt-2 ltr:pr-12 rtl:pl-12`}>
										<p className="text-base text-gray-500 dark:text-gray-300">
											{qa.A}
										</p>
									</dd>
								</div>
							);
						})}
					</dl>
				</div>
			</div>
		</div>
	);
}