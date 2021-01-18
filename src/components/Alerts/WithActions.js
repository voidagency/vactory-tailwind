import React from "react";
// https://tailwindui.com/components/application-ui/feedback/alerts#component-59743e93ed6676a0284e9f2ab10ac8f6

export default (props) => {
	return (
		<div className="max-w-4xl mx-auto rounded-md bg-green-50 p-4">
			<div className="flex">
				<div className="flex-shrink-0">
					{/* <!-- Heroicon name: check-circle --> */}
					<svg
						className="h-5 w-5 text-green-400"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fillRule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
				<div className="ltr:ml-3 rtl:mr-3">
					<h3 className="text-sm font-medium text-green-800">
						Order completed
					</h3>
					<div className="mt-2 text-sm text-green-700">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Aliquid pariatur, ipsum similique veniam.
						</p>
					</div>
					<div className="mt-4">
						<div className="-mx-2 -my-1.5 flex">
							<button className="bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600">
								View status
							</button>
							<button className="ltr:ml-3 rtl:mr-3 bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600">
								Dismiss
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
