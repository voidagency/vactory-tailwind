import React from "react";
// https://tailwindui.com/components/application-ui/navigation/breadcrumbs#component-cefd3c7f07d7f9bf0d47537df6519f18

export default (props) => {
	return (
		<nav className="flex" aria-label="Breadcrumb">
			<ol className="bg-white rounded-md shadow px-6 flex rtl:space-x-reverse space-x-4">
				<li className="flex">
					<div className="flex items-center">
						<a
							href="#"
							className="text-gray-400 hover:text-gray-500"
						>
							{/* <!-- Heroicon name: home --> */}
							<svg
								className="flex-shrink-0 h-5 w-5 transform rtl:-scale-x-100"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
							</svg>
							<span className="sr-only">Home</span>
						</a>
					</div>
				</li>
				<li className="flex">
					<div className="flex items-center">
						<svg
							className="flex-shrink-0 w-6 h-full text-gray-200 transform rtl:-scale-x-100"
							viewBox="0 0 24 44"
							preserveAspectRatio="none"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
						</svg>
						<a
							href="#"
							className="ltr:ml-4 rtl:mr-4 text-sm font-medium text-gray-500 hover:text-gray-700"
						>
							Projects
						</a>
					</div>
				</li>
				<li className="flex">
					<div className="flex items-center">
						<svg
							className="flex-shrink-0 w-6 h-full text-gray-200 transform rtl:-scale-x-100"
							viewBox="0 0 24 44"
							preserveAspectRatio="none"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
						</svg>
						<a
							href="#"
							aria-current="page"
							className="ltr:ml-4 rtl:mr-4 text-sm font-medium text-gray-500 hover:text-gray-700"
						>
							Project Nero
						</a>
					</div>
				</li>
			</ol>
		</nav>
	);
}