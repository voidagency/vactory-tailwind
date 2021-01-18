import React from "react";
import { CSSTransition } from "react-transition-group";
// https://tailwindui.com/components/application-ui/navigation/tabs#component-7c429fe94a1fc0801cfd429c3b507c12

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
					<option selected>Team Members</option>
					<option>Billing</option>
				</select>
			</div>
			<div className="hidden sm:block">
				<div className="border-b border-gray-200">
					<nav className="-mb-px flex" aria-label="Tabs">
						<a
							onClick={clickHandler}
							id="My Account"
							href="#"
							className={` ${
								currentTab === "My Account"
									? "border-indigo-500 text-indigo-600"
									: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
							} w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm`}
						>
							My Account
						</a>
						<a
							onClick={clickHandler}
							id="Company"
							href="#"
							className={` ${
								currentTab === "Company"
									? "border-indigo-500 text-indigo-600"
									: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
							} w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm`}
						>
							Company
						</a>
						{/* <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" --> */}
						<a
							onClick={clickHandler}
							id="Team Members"
							href="#"
							className={` ${
								currentTab === "Team Members"
									? "border-indigo-500 text-indigo-600"
									: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
							} w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm`}
							aria-current="page"
						>
							Team Members
						</a>
						<a
							onClick={clickHandler}
							id="Billing"
							href="#"
							className={` ${
								currentTab === "Billing"
									? "border-indigo-500 text-indigo-600"
									: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
							} w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm`}
						>
							Billing
						</a>
					</nav>
				</div>
			</div>

			{currentTab === "My Account" && (
				<CSSTransition
					in={currentTab === "My Account"}
					timeout={{
						enter: 300,
						exit: 200,
					}}
					classNames={{
						enter: "ease-out duration-300 opacity-0",
						enterActive: "ease-out duration-300 opacity-100",
						enterDone: "",
						exit: "ease-in duration-200",
						exitActive: "opacity-0",
						exitDone: "opacity-0",
					}}
				>
					<div>My Account</div>
				</CSSTransition>
			)}

			{currentTab === "Company" && (
				<CSSTransition
					in={currentTab === "Company"}
					timeout={{
						enter: 300,
						exit: 200,
					}}
					classNames={{
						enter: "ease-out duration-300 opacity-0",
						enterActive: "ease-out duration-300 opacity-100",
						enterDone: "",
						exit: "ease-in duration-200",
						exitActive: "opacity-0",
						exitDone: "opacity-0",
					}}
				>
					<div>Company</div>
				</CSSTransition>
			)}

			{currentTab === "Team Members" && (
				<CSSTransition
					in={currentTab === "Team Members"}
					timeout={{
						enter: 300,
						exit: 200,
					}}
					classNames={{
						enter: "ease-out duration-300 opacity-0",
						enterActive: "ease-out duration-300 opacity-100",
						enterDone: "",
						exit: "ease-in duration-200",
						exitActive: "opacity-0",
						exitDone: "opacity-0",
					}}
				>
					<div>Team Members</div>
				</CSSTransition>
			)}

			{currentTab === "Billing" && (
				<CSSTransition
					in={currentTab === "Billing"}
					timeout={{
						enter: 300,
						exit: 200,
					}}
					classNames={{
						enter: "ease-out duration-300 opacity-0",
						enterActive: "ease-out duration-300 opacity-100",
						enterDone: "",
						exit: "ease-in duration-200",
						exitActive: "opacity-0",
						exitDone: "opacity-0",
					}}
				>
					<div>Billing</div>
				</CSSTransition>
			)}
		</div>
	);
};
