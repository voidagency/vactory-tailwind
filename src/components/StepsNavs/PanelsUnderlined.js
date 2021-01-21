import React from "react";
// https://tailwindui.com/components/application-ui/navigation/steps#component-c84570c0de78ae9fc70cfb24a82abc87

export default (props) => {
	return (
		<div className="lg:border-t lg:border-b lg:border-gray-200">
			<nav
				className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
				aria-label="Progress"
			>
				<ol className="rounded-md overflow-hidden lg:flex lg:ltr:border-l lg:rtl:border-r lg:ltr:border-r lg:rtl:border-l lg:border-gray-200 lg:rounded-none">
					<li className="relative overflow-hidden lg:flex-1">
						<div className="border border-gray-200 overflow-hidden border-b-0 rounded-t-md lg:border-0">
							{/* Completed Step */}
							<a href="#" className="group">
								<span
									className="absolute top-0 ltr:left-0 rtl:right-0 w-1 h-full bg-transparent group-hover:bg-gray-200 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto"
									aria-hidden="true"
								/>
								<span className="px-6 py-5 flex items-start text-sm font-medium">
									<span className="flex-shrink-0">
										<span className="w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full">
											{/* Heroicon name: check */}
											<svg
												className="w-6 h-6 text-white"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												/>
											</svg>
										</span>
									</span>
									<span className="mt-0.5 ltr:ml-4 rtl:mr-4 min-w-0 flex flex-col">
										<span className="text-xs font-semibold uppercase tracking-wide">
											Job Details
										</span>
										<span className="text-sm font-medium text-gray-500">
											Vitae sed mi luctus laoreet.
										</span>
									</span>
								</span>
							</a>
						</div>
					</li>
					<li className="relative overflow-hidden lg:flex-1">
						<div className="border border-gray-200 overflow-hidden lg:border-0">
							{/* Current Step */}
							<a href="#" aria-current="step">
								<span
									className="absolute top-0 ltr:left-0 rtl:right-0 w-1 h-full bg-indigo-600 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto"
									aria-hidden="true"
								/>
								<span className="px-6 py-5 flex items-start text-sm font-medium lg:ltr:pl-9 lg:rtl:pr-9">
									<span className="flex-shrink-0">
										<span className="w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full">
											<span className="text-indigo-600">
												02
											</span>
										</span>
									</span>
									<span className="mt-0.5 ltr:ml-4 rtl:mr-4 min-w-0 flex flex-col">
										<span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
											Application form
										</span>
										<span className="text-sm font-medium text-gray-500">
											Cursus semper viverra.
										</span>
									</span>
								</span>
							</a>
							<div
								className="hidden absolute top-0 ltr:left-0 rtl:right-0 w-3 inset-0 lg:block"
								aria-hidden="true"
							>
								<svg
									className="h-full w-full text-gray-300 transform rtl:-scale-x-100"
									viewBox="0 0 12 82"
									fill="none"
									preserveAspectRatio="none"
								>
									<path
										d="M0.5 0V31L10.5 41L0.5 51V82"
										stroke="currentcolor"
										vectorEffect="non-scaling-stroke"
									/>
								</svg>
							</div>
						</div>
					</li>
					<li className="relative overflow-hidden lg:flex-1">
						<div className="border border-gray-200 overflow-hidden border-t-0 rounded-b-md lg:border-0">
							{/* Upcoming Step */}
							<a href="#" className="group">
								<span
									className="absolute top-0 ltr:left-0 rtl:right-0 w-1 h-full bg-transparent group-hover:bg-gray-200 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto"
									aria-hidden="true"
								/>
								<span className="px-6 py-5 flex items-start text-sm font-medium lg:ltr:pl-9 lg:rtl:pr-9">
									<span className="flex-shrink-0">
										<span className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full">
											<span className="text-gray-500">
												03
											</span>
										</span>
									</span>
									<span className="mt-0.5 ltr:ml-4 rtl:mr-4 min-w-0 flex flex-col">
										<span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
											Preview
										</span>
										<span className="text-sm font-medium text-gray-500">
											Penatibus eu quis ante.
										</span>
									</span>
								</span>
							</a>
							<div
								className="hidden absolute top-0 ltr:left-0 rtl:right-0 w-3 inset-0 lg:block"
								aria-hidden="true"
							>
								<svg
									className="h-full w-full text-gray-300 transform rtl:-scale-x-100"
									viewBox="0 0 12 82"
									fill="none"
									preserveAspectRatio="none"
								>
									<path
										d="M0.5 0V31L10.5 41L0.5 51V82"
										stroke="currentcolor"
										vectorEffect="non-scaling-stroke"
									/>
								</svg>
							</div>
						</div>
					</li>
				</ol>
			</nav>
		</div>
	);
};
