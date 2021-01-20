import React from "react";

export default {
	title: "Primitives/Radios",
};

export const Simple = () => {
	return (
		<fieldset className="max-w-lg mx-auto my-5">
			<legend className="sr-only">Privacy setting</legend>
			<div className="space-y-5">
				<div className="relative flex items-start">
					<div className="absolute flex items-center h-5">
						<input
							id="privacy_public"
							name="privacy_type"
							aria-describedby="privacy_public_description"
							type="radio"
							className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
						/>
					</div>
					<div className="pl-7 text-sm">
						<label
							htmlFor="privacy_public"
							className="font-medium text-gray-900"
						>
							Public access
						</label>
						<p
							id="privacy_public_description"
							className="text-gray-500"
						>
							Everyone with the link will see this project.
						</p>
					</div>
				</div>
				<div>
					<div className="relative flex items-start">
						<div className="absolute flex items-center h-5">
							<input
								id="privacy_private-to-project"
								name="privacy_type"
								aria-describedby="privacy_private-to-project_description"
								type="radio"
								className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
							/>
						</div>
						<div className="pl-7 text-sm">
							<label
								htmlFor="privacy_private-to-project"
								className="font-medium text-gray-900"
							>
								Private to project members
							</label>
							<p
								id="privacy_private-to-project_description"
								className="text-gray-500"
							>
								Only members of this project would be able to
								access.
							</p>
						</div>
					</div>
				</div>
				<div>
					<div className="relative flex items-start">
						<div className="absolute flex items-center h-5">
							<input
								id="privacy_private"
								name="privacy_type"
								aria-describedby="privacy_private-to-project_description"
								type="radio"
								className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
							/>
						</div>
						<div className="pl-7 text-sm">
							<label
								htmlFor="privacy_private"
								className="font-medium text-gray-900"
							>
								Private to you
							</label>
							<p
								id="privacy_private_description"
								className="text-gray-500"
							>
								You are the only one able to access this
								project.
							</p>
						</div>
					</div>
				</div>
			</div>
		</fieldset>
	);
};

export const Grouped = () => {
	const [selected, setSelected] = React.useState(null);

	const changeHanlder = (event) => {
		setSelected(event.currentTarget.value);
	};

	return (
		<fieldset className="max-w-lg mx-auto my-5">
			<legend className="sr-only">Privacy setting</legend>
			<div className="bg-white rounded-md -space-y-px">
				{/* On: "bg-indigo-50 border-indigo-200 z-10", Off: "border-gray-200" */}
				<div
					className={`${
						selected === "settings-option-0"
							? "bg-indigo-50 border-indigo-200 z-10"
							: "border-gray-200"
					} relative border rounded-tl-md rounded-tr-md p-4 flex`}
				>
					<div className="flex items-center h-5">
						<input
							onChange={changeHanlder}
							id="settings-option-0"
							name="privacy_setting"
							type="radio"
							value="settings-option-0"
							className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300"
						/>
					</div>
					<label
						htmlFor="settings-option-0"
						className="ml-3 flex flex-col cursor-pointer"
					>
						{/* On: "text-indigo-900", Off: "text-gray-900" */}
						<span
							className={`${
								selected === "settings-option-0"
									? "text-indigo-900"
									: "text-gray-900"
							}block text-sm font-medium`}
						>
							Public access
						</span>
						{/* On: "text-indigo-700", Off: "text-gray-500" */}
						<span
							className={`${
								selected === "settings-option-0"
									? "text-indigo-700"
									: "text-gray-500"
							} block text-sm`}
						>
							This project would be available to anyone who has
							the link
						</span>
					</label>
				</div>
				{/* On: "bg-indigo-50 border-indigo-200 z-10", Off: "border-gray-200" */}
				<div
					className={`${
						selected === "settings-option-1"
							? "bg-indigo-50 border-indigo-200 z-10"
							: "border-gray-200"
					} relative border border-gray-200 p-4 flex`}
				>
					<div className="flex items-center h-5">
						<input
							onChange={changeHanlder}
							id="settings-option-1"
							name="privacy_setting"
							type="radio"
							value="settings-option-1"
							className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300"
						/>
					</div>
					<label
						htmlFor="settings-option-1"
						className="ml-3 flex flex-col cursor-pointer"
					>
						{/* On: "text-indigo-900", Off: "text-gray-900" */}
						<span
							className={`${
								selected === "settings-option-1"
									? "text-indigo-900"
									: "text-gray-900"
							}block text-sm font-medium`}
						>
							Private to Project Members
						</span>
						{/* On: "text-indigo-700", Off: "text-gray-500" */}
						<span
							className={`${
								selected === "settings-option-1"
									? "text-indigo-700"
									: "text-gray-500"
							} block text-sm`}
						>
							Only members of this project would be able to access
						</span>
					</label>
				</div>
				{/* On: "bg-indigo-50 border-indigo-200 z-10", Off: "border-gray-200" */}
				<div
					className={`${
						selected === "settings-option-2"
							? "bg-indigo-50 border-indigo-200 z-10"
							: "border-gray-200"
					} relative border border-gray-200 rounded-bl-md rounded-br-md p-4 flex`}
				>
					<div className="flex items-center h-5">
						<input
							onChange={changeHanlder}
							id="settings-option-2"
							name="privacy_setting"
							type="radio"
							value="settings-option-2"
							className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300"
						/>
					</div>
					<label
						htmlFor="settings-option-2"
						className="ml-3 flex flex-col cursor-pointer"
					>
						{/* On: "text-indigo-900", Off: "text-gray-900" */}
						<span
							className={`${
								selected === "settings-option-2"
									? "text-indigo-900"
									: "text-gray-900"
							}block text-sm font-medium`}
						>
							Private to you
						</span>
						{/* On: "text-indigo-700", Off: "text-gray-500" */}
						<span
							className={`${
								selected === "settings-option-2"
									? "text-indigo-700"
									: "text-gray-500"
							} block text-sm`}
						>
							You are the only one able to access this project
						</span>
					</label>
				</div>
			</div>
		</fieldset>
	);
};

export const Cards = () => {
	const [selected, setSelected] = React.useState(null);

	const clickHandler = (event) => {
		setSelected(event.currentTarget.id);
	};

	return (
		<fieldset className="max-w-lg mx-auto my-5">
			<legend id="radiogroup-label" className="sr-only">
				Server size
			</legend>
			<ul
				className="space-y-4"
				role="radiogroup"
				aria-labelledby="radiogroup-label"
			>
				<li
					onClick={clickHandler}
					id="radiogroup-option-0"
					tabIndex={0}
					role="radio"
					aria-checked="true"
					className={` group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500`}
				>
					<div className="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
						<div className="flex items-center">
							<div className="text-sm">
								<p className="font-medium text-gray-900">
									Hobby
								</p>
								<div className="text-gray-500">
									<p className="sm:inline">8GB / 4 CPUs</p>
									<span
										className="hidden sm:inline sm:mx-1"
										aria-hidden="true"
									>
										·
									</span>
									<p className="sm:inline">160 GB SSD disk</p>
								</div>
							</div>
						</div>
						<div className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
							<div className="font-medium text-gray-900">$40</div>
							<div className="ml-1 text-gray-500 sm:ml-0">
								/mo
							</div>
						</div>
					</div>
					{/* On: "border-indigo-500", Off: "border-transparent" */}
					<div
						className={`${
							selected === "radiogroup-option-0"
								? "border-indigo-500"
								: "border-transparent"
						} border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none`}
						aria-hidden="true"
					/>
				</li>
				<li
					onClick={clickHandler}
					id="radiogroup-option-1"
					tabIndex={-1}
					role="radio"
					aria-checked="false"
					className={` group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500`}
				>
					<div className="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
						<div className="flex items-center">
							<div className="text-sm">
								<p className="font-medium text-gray-900">
									Startup
								</p>
								<div className="text-gray-500">
									<p className="sm:inline">12GB / 6 CPUs</p>
									<span
										className="hidden sm:inline sm:mx-1"
										aria-hidden="true"
									>
										·
									</span>
									<p className="sm:inline">256 GB SSD disk</p>
								</div>
							</div>
						</div>
						<div className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
							<div className="font-medium text-gray-900">$80</div>
							<div className="ml-1 text-gray-500 sm:ml-0">
								/mo
							</div>
						</div>
					</div>
					{/* On: "border-indigo-500", Off: "border-transparent" */}
					<div
						className={`${
							selected === "radiogroup-option-1"
								? "border-indigo-500"
								: "border-transparent"
						} border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none`}
						aria-hidden="true"
					/>
				</li>
				<li
					onClick={clickHandler}
					id="radiogroup-option-2"
					tabIndex={-1}
					role="radio"
					aria-checked="false"
					className={` group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500`}
				>
					<div className="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
						<div className="flex items-center">
							<div className="text-sm">
								<p className="font-medium text-gray-900">
									Business
								</p>
								<div className="text-gray-500">
									<p className="sm:inline">16GB / 8 CPUs</p>
									<span
										className="hidden sm:inline sm:mx-1"
										aria-hidden="true"
									>
										·
									</span>
									<p className="sm:inline">512 GB SSD disk</p>
								</div>
							</div>
						</div>
						<div className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
							<div className="font-medium text-gray-900">
								$160
							</div>
							<div className="ml-1 text-gray-500 sm:ml-0">
								/mo
							</div>
						</div>
					</div>
					{/* On: "border-indigo-500", Off: "border-transparent" */}
					<div
						className={`${
							selected === "radiogroup-option-2"
								? "border-indigo-500"
								: "border-transparent"
						} border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none`}
						aria-hidden="true"
					/>
				</li>
				<li
					onClick={clickHandler}
					id="radiogroup-option-3"
					tabIndex={-1}
					role="radio"
					aria-checked="false"
					className={` group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500`}
				>
					<div className="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
						<div className="flex items-center">
							<div className="text-sm">
								<p className="font-medium text-gray-900">
									Enterprise
								</p>
								<div className="text-gray-500">
									<p className="sm:inline">32GB / 12 CPUs</p>
									<span
										className="hidden sm:inline sm:mx-1"
										aria-hidden="true"
									>
										·
									</span>
									<p className="sm:inline">
										1024 GB SSD disk
									</p>
								</div>
							</div>
						</div>
						<div className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
							<div className="font-medium text-gray-900">
								$240
							</div>
							<div className="ml-1 text-gray-500 sm:ml-0">
								/mo
							</div>
						</div>
					</div>
					{/* On: "border-indigo-500", Off: "border-transparent" */}
					<div
						className={`${
							selected === "radiogroup-option-3"
								? "border-indigo-500"
								: "border-transparent"
						} border-transparent absolute inset-0 rounded-lg border-2 pointer-events-none`}
						aria-hidden="true"
					/>
				</li>
			</ul>
		</fieldset>
	);
};
