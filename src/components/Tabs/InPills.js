import React from "react";
import { Transition } from "@headlessui/react";
// https://tailwindui.com/components/application-ui/navigation/tabs#component-07e889de48dabb9e22d20353d7c02d16

export default (props) => {
	const [currentTab, setCurrentTab] = React.useState(null);

	const clickHandler = (e) => {
		e.preventDefault();
		setCurrentTab(e.currentTarget.id);
	};

	return (
		<div>
			<div className="sm:hidden">
				<label htmlFor="tabs" className="sr-only">
					Select a tab
				</label>
				<select
					onChange={(e) => setCurrentTab(e.currentTarget.value)}
					id="tabs"
					name="tabs"
					className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
				>
					<option>My Account</option>
					<option>Company</option>
					<option>Team Members</option>
					<option>Billing</option>
				</select>
			</div>
			<div className="hidden sm:block">
				<nav
					className="flex space-x-4 rtl:space-x-reverse"
					aria-label="Tabs"
				>
					<a
						id="My Account"
						onClick={clickHandler}
						href="#"
						className={`${
							currentTab === "My Account"
								? "bg-indigo-100 text-indigo-700"
								: "text-gray-500 hover:text-gray-700"
						} px-3 py-2 font-medium text-sm rounded-md`}
					>
						My Account
					</a>
					<a
						id="Company"
						onClick={clickHandler}
						href="#"
						className={`${
							currentTab === "Company"
								? "bg-indigo-100 text-indigo-700"
								: "text-gray-500 hover:text-gray-700"
						} px-3 py-2 font-medium text-sm rounded-md`}
					>
						Company
					</a>
					{/* <!-- Current: "bg-indigo-100 text-indigo-700", Default: "text-gray-500 hover:text-gray-700" --> */}
					<a
						id="Team Members"
						onClick={clickHandler}
						href="#"
						className={`${
							currentTab === "Team Members"
								? "bg-indigo-100 text-indigo-700"
								: "text-gray-500 hover:text-gray-700"
						} px-3 py-2 font-medium text-sm rounded-md`}
						aria-current="page"
					>
						Team Members
					</a>
					<a
						id="Billing"
						onClick={clickHandler}
						href="#"
						className={`${
							currentTab === "Billing"
								? "bg-indigo-100 text-indigo-700"
								: "text-gray-500 hover:text-gray-700"
						} px-3 py-2 font-medium text-sm rounded-md`}
					>
						Billing
					</a>
				</nav>
			</div>

			<div className="relative">
				<Transition
					show={currentTab === "My Account"}
					enter="transform ease-out duration-300 transition"
					enterFrom="scale-90 opacity-0"
					enterTo="scale-100 opacity-100"
					leave="transform ease-out duration-300 transition"
					leaveFrom="scale-100 opacity-100"
					leaveTo="scale-90 opacity-0"
					className="absolute inset-0"
				>
					<div>My Account</div>
				</Transition>

				<Transition
					show={currentTab === "Company"}
					enter="transform ease-out duration-300 transition"
					enterFrom="scale-90 opacity-0"
					enterTo="scale-100 opacity-100"
					leave="transform ease-out duration-300 transition"
					leaveFrom="scale-100 opacity-100"
					leaveTo="scale-90 opacity-0"
					className="absolute inset-0"
				>
					<div>Company</div>
				</Transition>

				<Transition
					show={currentTab === "Team Members"}
					enter="transform ease-out duration-300 transition"
					enterFrom="scale-90 opacity-0"
					enterTo="scale-100 opacity-100"
					leave="transform ease-out duration-300 transition"
					leaveFrom="scale-100 opacity-100"
					leaveTo="scale-90 opacity-0"
					className="absolute inset-0"
				>
					<div>Team Members</div>
				</Transition>

				<Transition
					show={currentTab === "Billing"}
					enter="transform ease-out duration-300 transition"
					enterFrom="scale-90 opacity-0"
					enterTo="scale-100 opacity-100"
					leave="transform ease-out duration-300 transition"
					leaveFrom="scale-100 opacity-100"
					leaveTo="scale-90 opacity-0"
					className="absolute inset-0"
				>
					<div>Billing</div>
				</Transition>
			</div>
		</div>
	);
};
