import React from "react";
// https://tailwindui.com/components/application-ui/feedback/alerts#component-8a099d76389c1c4d6d4e92d69acbc8d2


export default (props) => {
	return (
		<div className="max-w-4xl mx-auto rounded-md bg-yellow-50 p-4">
			<div className="flex">
				<div className="flex-shrink-0">
					{/* <!-- Heroicon name: exclamation --> */}
					<svg
						className="h-5 w-5 text-yellow-400"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fillRule="evenodd"
							d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
				<div className="ltr:ml-3 rtl:mr-3">
					<h3 className="text-sm font-medium text-yellow-800">
						Attention needed
					</h3>
					<div className="mt-2 text-sm text-yellow-700">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Aliquid pariatur, ipsum similique veniam quo
							totam eius aperiam dolorum.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}