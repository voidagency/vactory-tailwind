import React from "react";
// https://tailwindui.com/components/marketing/sections/cta-sections#component-25ce2a81d17545994655ccc4062651a4


export default (props) => {
	return (
		<div className="bg-white">
			<div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
				<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
					<span className="block">Ready to dive in?</span>
					<span className="block">Start your free trial today.</span>
				</h2>
				<div className="mt-8 flex justify-center">
					<div className="inline-flex rounded-md shadow">
						<a
							href="#!"
							className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
						>
							Get started
						</a>
					</div>
					<div className="ltr:ml-3 rtl:mr-3 inline-flex">
						<a
							href="#!"
							className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
						>
							Learn more
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
