import React from "react";

export default {
	title: "Primitives/Inputs",
};

export const Input_1 = () => {
	return (
		<div className="w-full max-w-xs mx-auto py-6">
			<div>
				<label
					htmlFor="email"
					className="block text-sm font-medium text-gray-700"
				>
					Email
				</label>
				<div className="mt-1">
					<input
						type="text"
						name="email"
						id="email"
						className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
						placeholder="you@example.com"
					/>
				</div>
			</div>
		</div>
	);
};
export const Input_2 = () => {
	return (
		<div className="w-full max-w-xs mx-auto py-6">
			<div>
				<label
					htmlFor="email"
					className="block text-sm font-medium text-gray-700"
				>
					Email
				</label>
				<div className="mt-1">
					<input
						type="text"
						name="email"
						id="email"
						className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
						placeholder="you@example.com"
						aria-describedby="email-description"
					/>
				</div>
				<p
					className="mt-2 text-sm text-gray-500"
					id="email-description"
				>
					Make your password short and easy to guess.
				</p>
			</div>
		</div>
	);
};
export const Input_3 = () => {
	return (
		<div className="w-full max-w-xs mx-auto py-6">
			<div>
				<label
					htmlFor="email"
					className="block text-sm font-medium text-gray-700"
				>
					Email
				</label>
				<div className="mt-1 relative rounded-md shadow-sm">
					<input
						type="text"
						name="email"
						id="email"
						className="block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
						placeholder="you@example.com"
						defaultValue="admin"
						aria-invalid="true"
						aria-describedby="email-error"
					/>
					<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
						<svg
							className="h-5 w-5 text-red-500"
							x-description="Heroicon name: exclamation-circle"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
								clip-rule="evenodd"
							></path>
						</svg>
					</div>
				</div>
				<p className="mt-2 text-sm text-red-600" id="email-error">
					Your password must be less than 4 characters.
				</p>
			</div>
		</div>
	);
};
export const Input_4 = () => {
	return (
		<div className="w-full max-w-xs mx-auto py-6">
			<div>
				<div className="flex justify-between">
					<label
						htmlFor="email"
						className="block text-sm font-medium text-gray-700"
					>
						Email
					</label>
					<span className="text-sm text-gray-500" id="email-optional">
						Optional
					</span>
				</div>
				<div className="mt-1">
					<input
						type="text"
						name="email"
						id="email"
						className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
						placeholder="you@example.com"
						aria-describedby="email-optional"
					/>
				</div>
			</div>
		</div>
	);
};
export const Input_5 = () => {
	return (
		<div className="w-full max-w-xs mx-auto py-6">
			<div>
				<label
					htmlFor="email"
					className="block text-sm font-medium text-gray-700"
				>
					Email
				</label>
				<div className="mt-1 relative rounded-md shadow-sm">
					<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
						<svg
							className="h-5 w-5 text-gray-400"
							x-description="Heroicon name: mail"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
						</svg>
					</div>
					<input
						type="text"
						name="email"
						id="email"
						className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
						placeholder="you@example.com"
					/>
				</div>
			</div>
		</div>
	);
};
export const Input_6 = () => {
	return (
		<div className="w-full max-w-xs mx-auto py-6">
			<div>
				<label
					htmlFor="account_number"
					className="block text-sm font-medium text-gray-700"
				>
					Account number
				</label>
				<div className="mt-1 relative rounded-md shadow-sm">
					<input
						type="text"
						name="account_number"
						id="account_number"
						className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
						placeholder="000-00-0000"
					/>
					<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
						<svg
							className="h-5 w-5 text-gray-400"
							x-description="Heroicon name: question-mark-circle"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
								clip-rule="evenodd"
							></path>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
};
export const Input_7 = () => {
	return (
		<div className="w-full max-w-xs mx-auto py-6">
			<div>
				<label
					htmlFor="company_website"
					className="block text-sm font-medium text-gray-700"
				>
					Company Website
				</label>
				<div className="mt-1 relative rounded-md shadow-sm">
					<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
						<span className="text-gray-500 sm:text-sm">
							http://
						</span>
					</div>
					<input
						type="text"
						name="company_website"
						id="company_website"
						className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-16 sm:pl-14 sm:text-sm border-gray-300 rounded-md"
						placeholder="www.example.com"
					/>
				</div>
			</div>
		</div>
	);
};
export const Input_8 = () => {
	return (
		<div className="w-full max-w-xs mx-auto py-6">
			<div>
				<label
					htmlFor="company_website"
					className="block text-sm font-medium text-gray-700"
				>
					Company Website
				</label>
				<div className="mt-1 flex rounded-md shadow-sm">
					<span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
						http://
					</span>
					<input
						type="text"
						name="company_website"
						id="company_website"
						className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full px-3 py-2 rounded-none rounded-r-md sm:text-sm border-gray-300"
						placeholder="www.example.com"
					/>
				</div>
			</div>
		</div>
	);
};
export const Input_9 = () => {
	return (
		<div className="w-full max-w-xs mx-auto py-6">
			<div>
				<label
					htmlFor="phone_number"
					className="block text-sm font-medium text-gray-700"
				>
					Phone Number
				</label>
				<div className="mt-1 relative rounded-md shadow-sm">
					<div className="absolute inset-y-0 left-0 flex items-center">
						<label htmlFor="country" className="sr-only">
							Country
						</label>
						<select
							id="country"
							name="country"
							className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
						>
							<option>US</option>
							<option>CA</option>
							<option>EU</option>
						</select>
					</div>
					<input
						type="text"
						name="phone_number"
						id="phone_number"
						className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-16 sm:text-sm border-gray-300 rounded-md"
						placeholder="+1 (555) 987-6543"
					/>
				</div>
			</div>
		</div>
	);
};
export const Input_10 = () => {
	return (
		<div className="w-full max-w-sm mx-auto">
			<div>
				<label
					htmlFor="email"
					className="block text-sm font-medium text-gray-700"
				>
					Search candidates
				</label>
				<div className="mt-1 flex rounded-md shadow-sm">
					<div className="relative flex items-stretch flex-grow focus-within:z-10">
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<svg
								className="h-5 w-5 text-gray-400"
								x-description="Heroicon name: users"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
							</svg>
						</div>
						<input
							type="text"
							name="email"
							id="email"
							className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
							placeholder="John Doe"
						/>
					</div>
					<button className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
						<svg
							className="h-5 w-5 text-gray-400"
							x-description="Heroicon name: sort-ascending"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"></path>
						</svg>
						<span>Sort</span>
					</button>
				</div>
			</div>
		</div>
	);
};
export const Input_11 = () => {
	return (
		<div className="w-full max-w-xs mx-auto py-6">
			<div>
				<fieldset>
					<legend className="block text-sm font-medium text-gray-700">
						Card Details
					</legend>
					<div className="mt-1 bg-white rounded-md shadow-sm -space-y-px">
						<div>
							<label htmlFor="card-number" className="sr-only">
								Card number
							</label>
							<input
								type="text"
								name="card-number"
								id="card-number"
								className="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300"
								placeholder="Card number"
							/>
						</div>
						<div className="flex -space-x-px">
							<div className="w-1/2 flex-1 min-w-0">
								<label
									for="card-expiration-date"
									className="sr-only"
								>
									Expiration date
								</label>
								<input
									type="text"
									name="card-expiration-date"
									id="card-expiration-date"
									className="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-bl-md bg-transparent focus:z-10 sm:text-sm border-gray-300"
									placeholder="MM / YY"
								/>
							</div>
							<div className="flex-1 min-w-0">
								<label htmlFor="card-cvc" className="sr-only">
									CVC
								</label>
								<input
									type="text"
									name="card-cvc"
									id="card-cvc"
									className="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-br-md bg-transparent focus:z-10 sm:text-sm border-gray-300"
									placeholder="CVC"
								/>
							</div>
						</div>
					</div>
				</fieldset>
				<fieldset className="mt-6 bg-white">
					<legend className="block text-sm font-medium text-gray-700">
						Billing address
					</legend>
					<div className="mt-1 rounded-md shadow-sm -space-y-px">
						<div>
							<label htmlFor="country" className="sr-only">
								Country
							</label>
							<select
								id="country"
								name="country"
								className="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300"
							>
								<option>USA</option>
								<option>Canada</option>
							</select>
						</div>
						<div>
							<label htmlFor="postal-code" className="sr-only">
								Postal code
							</label>
							<input
								type="text"
								name="postal-code"
								id="postal-code"
								className="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-b-md bg-transparent focus:z-10 sm:text-sm border-gray-300"
								placeholder="Postal code"
							/>
						</div>
					</div>
				</fieldset>
			</div>
		</div>
	);
};

