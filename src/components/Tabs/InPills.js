import React from "react";
import { CSSTransition } from "react-transition-group";
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
				<nav className="flex space-x-4" aria-label="Tabs">
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
						enterDone: "block-!",
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
						enterDone: "block-!",
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
						enterDone: "block-!",
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
						enterDone: "block-!",
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
