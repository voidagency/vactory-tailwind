import React from "react";
// https://tailwindui.com/components/application-ui/navigation/steps#component-1f0d948b6dc88b825bef07f7503e3087

export default (props) => {
	return (
		<nav aria-label="Progress">
			<ol className="space-y-4 md:flex md:space-y-0 md:space-x-8 md:rtl:space-x-reverse">
				<li className="md:flex-1">
					{/* Completed Step */}
					<a
						href="#"
						className="group ltr:pl-4 rtl:pr-4 py-2 flex flex-col ltr:border-l-4 rtl:border-r-4 border-indigo-600 hover:border-indigo-800 md:ltr:pl-0 md:rtl:pr-0 md:pt-4 md:pb-0 md:ltr:border-l-0 md:rtl:border-r-0 md:border-t-4"
					>
						<span className="text-xs text-indigo-600 font-semibold uppercase group-hover:text-indigo-800">
							Step 1
						</span>
						<span className="text-sm font-medium">Job details</span>
					</a>
				</li>
				<li className="md:flex-1">
					{/* Current Step */}
					<a
						href="#"
						className="ltr:pl-4 rtl:pr-4 py-2 flex flex-col ltr:border-l-4 rtl:border-r-4 border-indigo-600 md:ltr:pl-0 md:rtl:pr-0 md:pt-4 md:pb-0 md:ltr:border-l-0 md:rtl:border-r-0 md:border-t-4"
						aria-current="step"
					>
						<span className="text-xs text-indigo-600 font-semibold uppercase">
							Step 2
						</span>
						<span className="text-sm font-medium">
							Application form
						</span>
					</a>
				</li>
				<li className="md:flex-1">
					{/* Upcoming Step */}
					<a
						href="#"
						className="group ltr:pl-4 rtl:pr-4 py-2 flex flex-col ltr:border-l-4 rtl:border-r-4 border-gray-200 hover:border-gray-300 md:ltr:pl-0 md:rtl:pr-0 md:pt-4 md:pb-0 md:ltr:border-l-0 md:rtl:border-r-0 md:border-t-4"
					>
						<span className="text-xs text-gray-500 font-semibold uppercase group-hover:text-gray-700">
							Step 3
						</span>
						<span className="text-sm font-medium">Preview</span>
					</a>
				</li>
			</ol>
		</nav>
	);
};
