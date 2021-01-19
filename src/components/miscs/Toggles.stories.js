import React from "react";

export default {
	title: "Primitives/toggles"
}

export const Simple = (props) => {
	const [isSet, setIsSet] = React.useState(false);

	return (
		// <!-- On: "bg-indigo-600", Off: "bg-gray-200" -->
		<button
			onClick={() => setIsSet(!isSet)}
			type="button"
			aria-pressed="false"
			className={`${
				isSet ? "bg-indigo-600" : "bg-gray-200"
			} relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
		>
			<span className="sr-only">Use setting</span>
			{/* <!-- On: "translate-x-5", Off: "translate-x-0" --> */}
			<span
				aria-hidden="true"
				className={`${
					isSet
						? "ltr:translate-x-5 rtl:-translate-x-5"
						: "translate-x-0"
				} translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
			/>
		</button>
	);
};

export const Narrow = () => {
	const [isSet, setIsSet] = React.useState(false);

	return (
		<button
			onClick={() => setIsSet(!isSet)}
			type="button"
			aria-pressed="false"
			className="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
		>
			<span className="sr-only">Use setting</span>
			{/* <!-- On: "bg-indigo-600", Off: "bg-gray-200" --> */}
			<span
				aria-hidden="true"
				className={`${
					isSet ? "bg-indigo-600" : "bg-gray-200"
				} absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200`}
			/>
			{/* <!-- On: "translate-x-5", Off: "translate-x-0" --> */}
			<span
				aria-hidden="true"
				className={`${
					isSet
						? "ltr:translate-x-5 rtl:-translate-x-5"
						: "translate-x-0"
				} absolute ltr:left-0 rtl:right-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200`}
			/>
		</button>
	);
};

export const WithIcon = () => {
	const [isSet, setIsSet] = React.useState(false);

	return (
		// <!-- On: "bg-indigo-600", Off: "bg-gray-200" -->
		<button
			onClick={() => setIsSet(!isSet)}
			type="button"
			aria-pressed="false"
			className={`${
				isSet ? "bg-indigo-600" : "bg-gray-200"
			} relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
		>
			<span className="sr-only">Use setting</span>
			{/* <!-- On: "translate-x-5", Off: "translate-x-0" --> */}
			<span
				className={`${
					isSet
						? "ltr:translate-x-5 rtl:-translate-x-5"
						: "translate-x-0"
				} relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
			>
				{/* <!-- On: "opacity-0 ease-out duration-100", Off: "opacity-100 ease-in duration-200" --> */}
				<span
					className={`${
						isSet
							? "opacity-0 ease-out duration-100"
							: "opacity-100 ease-in duration-200"
					} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
					aria-hidden="true"
				>
					<svg
						className="h-3 w-3 text-gray-400"
						fill="none"
						viewBox="0 0 12 12"
					>
						<path
							d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</span>
				{/* <!-- On: "opacity-100 ease-in duration-200", Off: "opacity-0 ease-out duration-100" --> */}
				<span
					className={`${
						isSet
							? "opacity-100 ease-in duration-200"
							: "opacity-0 ease-out duration-100"
					} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
					aria-hidden="true"
				>
					<svg
						className="h-3 w-3 text-indigo-600"
						fill="currentColor"
						viewBox="0 0 12 12"
					>
						<path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
					</svg>
				</span>
			</span>
		</button>
	);
};
