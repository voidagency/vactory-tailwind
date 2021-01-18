import React from "react";
import { CSSTransition } from "react-transition-group";
// https://tailwindui.com/components/application-ui/navigation/tabs#component-aed2acb28998d158d7aa898cb19540e4

export default (props) => {
	const [currentTab, setCurrentTab] = React.useState(null);

	const clickHandler = (e) => {
		e.preventDefault();
		setCurrentTab(e.currentTarget.id);
	};

	return (
		<div>
			<div className="sm:hidden">
				<label htmlhtmhtmlFor="tabs" className="sr-only">
					Select a tab
				</label>
				<select
					onChange={(e) => {
						console.log(e.currentTarget.value, e.currentTarget);
						setCurrentTab(e.currentTarget.value);
					}}
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
				<div className="border-b border-gray-200">
					<nav
						className="-mb-px flex space-x-8 rtl:space-x-reverse"
						aria-label="Tabs"
					>
						<a
							onClick={clickHandler}
							id="My Account"
							href="#"
							className={`${
								currentTab === "My Account"
									? "border-indigo-500 text-indigo-600"
									: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
							} group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm`}
						>
							{/* <!-- Heroicon name: user --> */}
							<svg
								className={`${
									currentTab === "My Account"
										? "text-indigo-500"
										: "text-gray-400 group-hover:text-gray-500"
								} ltr:-ml-0.5 rtl:-mr-0.5 ltr:mr-2 rtl:ml-2 h-5 w-5`}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
									clipRule="evenodd"
								/>
							</svg>
							<span>My Account</span>
						</a>
						<a
							onClick={clickHandler}
							id="Company"
							href="#"
							className={`${
								currentTab === "Company"
									? "border-indigo-500 text-indigo-600"
									: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
							} border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm`}
						>
							{/* <!-- Heroicon name: office-building --> */}
							<svg
								className={`${
									currentTab === "Company"
										? "text-indigo-500"
										: "text-gray-400 group-hover:text-gray-500"
								} ltr:-ml-0.5 rtl:-mr-0.5 ltr:mr-2 rtl:ml-2 h-5 w-5`}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
									clipRule="evenodd"
								/>
							</svg>
							<span>Company</span>
						</a>
						{/* <!-- Current: "border-indigo-500 text-indigo-600",
						Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" --> */}
						<a
							onClick={clickHandler}
							id="Team Members"
							href="#"
							className={`${
								currentTab === "Team Members"
									? "border-indigo-500 text-indigo-600"
									: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
							} border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm`}
							aria-current="page"
						>
							{/* <!-- Current: "text-indigo-500", Default: "" --> */}
							{/* <!-- Heroicon name: users --> */}
							<svg
								className={`${
									currentTab === "Team Members"
										? "text-indigo-500"
										: "text-gray-400 group-hover:text-gray-500"
								} ltr:-ml-0.5 rtl:-mr-0.5 ltr:mr-2 rtl:ml-2 h-5 w-5`}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
							</svg>
							<span>Team Members</span>
						</a>
						<a
							onClick={clickHandler}
							id="Billing"
							href="#"
							className={`${
								currentTab === "Billing"
									? "border-indigo-500 text-indigo-600"
									: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
							} border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm`}
						>
							{/* <!-- Heroicon name: credit-card --> */}
							<svg
								className={`${
									currentTab === "Billing"
										? "text-indigo-500"
										: "text-gray-400 group-hover:text-gray-500"
								} ltr:-ml-0.5 rtl:-mr-0.5 ltr:mr-2 rtl:ml-2 h-5 w-5`}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
								<path
									fillRule="evenodd"
									d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
									clipRule="Renodd"
								/>
							</svg>
							<span>Billing</span>
						</a>
					</nav>
				</div>
			</div>

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
					exitDone: "hidden",
				}}
			>
				<div className="hidden">My Account</div>
			</CSSTransition>

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
					exitDone: "hidden",
				}}
			>
				<div className="hidden">Company</div>
			</CSSTransition>

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
					exitDone: "hidden",
				}}
			>
				<div className="hidden">Team Members</div>
			</CSSTransition>

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
					exitDone: "hidden",
				}}
			>
				<div className="hidden">Billing</div>
			</CSSTransition>
		</div>
	);
};
