import React from "react";
import { CSSTransition } from "react-transition-group";
import { Dropdown } from "../../components/miscs/Dropdown";

export default {
	title: "Primitives/Buttons/Grouped",
	decorators: [
		(S) => (
			<div className="p-8 bg-white flex items-start justify-center">
				<S />
			</div>
		),
	],
};

export const Basic = () => {
	return (
		<span class="relative z-0 inline-flex shadow-sm rounded-md">
			<button
				type="button"
				class="relative inline-flex items-center px-4 py-2 ltr:rounded-l-md rtl:rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
			>
				Years
			</button>
			<button
				type="button"
				class="ltr:-ml-px rtl:-mr-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
			>
				Months
			</button>
			<button
				type="button"
				class="ltr:-ml-px rtl:-mr-px relative inline-flex items-center px-4 py-2 ltr:rounded-r-md rtl:rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
			>
				Days
			</button>
		</span>
	);
};

export const WithNativeSelect = () => {
	return (
		<span className="relative z-0 inline-flex shadow-sm rounded-md">
			<span className="relative inline-flex items-center px-2 py-2 ltr:rounded-l-md rtl:rounded-r-md border border-gray-300 bg-white">
				<label htmlFor="select-all" className="sr-only">
					Select all
				</label>
				<input
					id="select-all"
					type="checkbox"
					name="select-all"
					className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
				/>
			</span>
			<label htmlFor="message-type" className="sr-only">
				Select message type
			</label>
			<select
				id="message-type"
				name="message-type"
				className="ltr:-ml-px rtl:-mr-px block w-full ltr:pl-3 rtl:pr-3 ltr:pr-9 rtl:pl-9 py-2 ltr:rounded-l-none rtl:rounded-r-none ltr:rounded-r-md rtl:rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
			>
				<option>Unread messages</option>
				<option>Sent messages</option>
				<option>All messages</option>
			</select>
		</span>
	);
};

export const WithDropdown = () => {
	const popin = React.useRef(null);
	const [isOpen, setIsOpen] = React.useState(false);

	// to close dropdown on click outside
	const handleClickOutside = (e) => {
		if (!popin.current.contains(e.target)) setIsOpen(false);
	};

	// attach click outside handler
	React.useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<span className="relative z-0 inline-flex shadow-sm rounded-md">
			<button
				type="button"
				className="relative inline-flex items-center px-4 py-2 ltr:rounded-l-md rtl:rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
			>
				Save changes
			</button>
			<span ref={popin} className="ltr:-ml-px rtl:-mr-px relative block">
				<button
					onClick={(e) => setIsOpen(!isOpen)}
					id="option-menu"
					type="button"
					className="relative inline-flex items-center px-2 py-2 ltr:rounded-r-md rtl:rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
					aria-haspopup="true"
					aria-expanded={isOpen}
				>
					<span className="sr-only">Open options</span>
					{/* Heroicon name: chevron-down */}
					<svg
						className="h-5 w-5"
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
				{/*
				Dropdown panel, show/hide based on dropdown state.

				Entering: "transition ease-out duration-100"
				From: "transform opacity-0 scale-95"
				To: "transform opacity-100 scale-100"
				Leaving: "transition ease-in duration-75"
				From: "transform opacity-100 scale-100"
				To: "transform opacity-0 scale-95"
				*/}
				<CSSTransition
					in={isOpen}
					timeout={{
						enter: 100,
						exit: 75,
					}}
					classNames={{
						enter:
							"transition ease-out duration-100 transform opacity-0 scale-95",
						enterActive:
							"transition ease-out duration-100 transform opacity-100 scale-100",
						enterDone: "",
						exit: "transition ease-in duration-75",
						exitActive: "transform opacity-0 scale-95",
						exitDone: "hidden",
					}}
				>
					<div className="ltr:origin-top-right rtl:origin-top-left absolute ltr:right-0 rtl:left-0 mt-2 ltr:-mr-1 rtl:-ml-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
						<div
							className="py-1"
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="option-menu"
						>
							<a
								href="#"
								className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
								role="menuitem"
							>
								Save and schedule
							</a>
							<a
								href="#"
								className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
								role="menuitem"
							>
								Save and publish
							</a>
							<a
								href="#"
								className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
								role="menuitem"
							>
								Export PDF
							</a>
						</div>
					</div>
				</CSSTransition>
			</span>
		</span>
	);
};

export const WithStats = () => {
	return (
		<span className="relative z-0 inline-flex shadow-sm rounded-md">
			<button
				type="button"
				className="relative inline-flex items-center px-4 py-2 ltr:rounded-l-md rtl:rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
			>
				{/* Heroicon name: bookmark */}
				<svg
					className="ltr:-ml-1 rtl:-mr-1 ltr:mr-2 rtl:ml-2 h-5 w-5 text-gray-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
				</svg>
				Bookmark
			</button>
			<button
				type="button"
				className="ltr:-ml-px rtl:-mr-px relative inline-flex items-center px-3 py-2 ltr:rounded-r-md rtl:rounded-l-md border border-gray-300 bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
			>
				12k
			</button>
		</span>
	);
};
