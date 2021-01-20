import React from "react";

export default {
	title: "Primitives/Badges",
	decorators: [
		(Story) => (
			<div className="p-8 flex items-center justify-center">
				<Story />
			</div>
		),
	],
};

export const Small = (props) => {
	return (
		<div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 sm:rtl:space-x-reverse">
			<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
				Badge
			</span>
			<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
				Badge
			</span>
			<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
				Badge
			</span>
			<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
				Badge
			</span>
			<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
				Badge
			</span>
			<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
				Badge
			</span>
			<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
				Badge
			</span>
			<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
				Badge
			</span>
		</div>
	);
};

export const Medium = (props) => {
	return (
		<div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 sm:rtl:space-x-reverse">
			<span className="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
				Badge
			</span>
			<span className="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800">
				Badge
			</span>
			<span className="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
				Badge
			</span>
			<span className="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
				Badge
			</span>
			<span className="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
				Badge
			</span>
			<span className="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
				Badge
			</span>
			<span className="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
				Badge
			</span>
			<span className="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
				Badge
			</span>
		</div>
	);
};

export const Large = (props) => {
	return (
		<div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 sm:rtl:space-x-reverse">
			<span className="inline-flex items-center px-4 py-1 rounded-full text-base font-medium bg-gray-100 text-gray-800">
				Badge
			</span>
			<span className="inline-flex items-center px-4 py-1 rounded-full text-base font-medium bg-red-100 text-red-800">
				Badge
			</span>
			<span className="inline-flex items-center px-4 py-1 rounded-full text-base font-medium bg-yellow-100 text-yellow-800">
				Badge
			</span>
			<span className="inline-flex items-center px-4 py-1 rounded-full text-base font-medium bg-green-100 text-green-800">
				Badge
			</span>
			<span className="inline-flex items-center px-4 py-1 rounded-full text-base font-medium bg-blue-100 text-blue-800">
				Badge
			</span>
			<span className="inline-flex items-center px-4 py-1 rounded-full text-base font-medium bg-indigo-100 text-indigo-800">
				Badge
			</span>
			<span className="inline-flex items-center px-4 py-1 rounded-full text-base font-medium bg-purple-100 text-purple-800">
				Badge
			</span>
			<span className="inline-flex items-center px-4 py-1 rounded-full text-base font-medium bg-pink-100 text-pink-800">
				Badge
			</span>
		</div>
	);
};

export const WithIcon = () => {
	return (
		<div className="flex flex-col items-start space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-4 sm:rtl:space-x-reverse">
			<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800">
				<svg
					className="ltr:mr-1.5 rtl:ml-1.5 h-2 w-2 text-indigo-400"
					fill="currentColor"
					viewBox="0 0 8 8"
				>
					<circle cx={4} cy={4} r={3} />
				</svg>
				Small
			</span>
			<span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800">
				<svg
					className="ltr:-ml-0.5 rtl:-mr-0.5 ltr:mr-1.5 rtl:ml-1.5 h-2 w-2 text-indigo-400"
					fill="currentColor"
					viewBox="0 0 8 8"
				>
					<circle cx={4} cy={4} r={3} />
				</svg>
				Medium
			</span>
			<span className="inline-flex items-center px-4 py-1 rounded-md text-base font-medium bg-indigo-100 text-indigo-800">
				<svg
					className="ltr:-ml-0.5 rtl:-mr-0.5 ltr:mr-1.5 rtl:ml-1.5 h-3 w-3 text-indigo-400"
					fill="currentColor"
					viewBox="0 0 8 8"
				>
					<circle cx={4} cy={4} r={3} />
				</svg>
				Large
			</span>
		</div>
	);
};

export const Removable = () => {
	const remove = (event) => {
		const group = event.currentTarget.closest('.group');
		group.classList.add("invisible");
		setTimeout(() => {
			group.classList.remove("invisible");
		}, 500);
	}

	return (
		<div className="flex flex-col items-start space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-4 sm:rtl:space-x-reverse">
			<span className="group inline-flex items-center py-0.5 ltr:pl-2 rtl:pr-2 ltr:pr-0.5 rtl:pl-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700">
				Small
				<button
					onClick={remove}
					type="button"
					className="flex-shrink-0 ltr:ml-0.5 rtl:mr-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
				>
					<span className="sr-only">Remove small option</span>
					<svg
						className="h-2 w-2"
						stroke="currentColor"
						fill="none"
						viewBox="0 0 8 8"
					>
						<path
							strokeLinecap="round"
							strokeWidth="1.5"
							d="M1 1l6 6m0-6L1 7"
						/>
					</svg>
				</button>
			</span>
			<span className="group inline-flex rounded-full items-center py-0.5 ltr:pl-2.5 rtl:pr-2.5 ltr:pr-1 rtl:pl-1 text-sm font-medium bg-indigo-100 text-indigo-700">
				Medium
				<button
					onClick={remove}
					type="button"
					className="flex-shrink-0 ltr:ml-0.5 rtl:mr-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
				>
					<span className="sr-only">Remove large option</span>
					<svg
						className="h-2 w-2"
						stroke="currentColor"
						fill="none"
						viewBox="0 0 8 8"
					>
						<path
							strokeLinecap="round"
							strokeWidth="1.5"
							d="M1 1l6 6m0-6L1 7"
						/>
					</svg>
				</button>
			</span>
			<span className="group inline-flex rounded-full items-center py-1 ltr:pl-4 rtl:pr-4 ltr:pr-2.5 rtl:pl-2.5 text-base font-medium bg-indigo-100 text-indigo-700">
				Large
				<button
					onClick={remove}
					type="button"
					className="flex-shrink-0 ltr:ml-0.5 rtl:mr-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
				>
					<span className="sr-only">Remove large option</span>
					<svg
						className="h-3 w-3"
						stroke="currentColor"
						fill="none"
						viewBox="0 0 8 8"
					>
						<path
							strokeLinecap="round"
							strokeWidth="1.5"
							d="M1 1l6 6m0-6L1 7"
						/>
					</svg>
				</button>
			</span>
		</div>
	);
};
