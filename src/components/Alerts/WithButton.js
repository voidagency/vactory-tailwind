import React from "react";
// https://tailwindui.com/components/application-ui/feedback/alerts#component-e67a7131a853fd88ae683dbad613fe53

export default (props) => {
	return (
		<div class="max-w-4xl mx-auto rounded-md bg-blue-50 p-4">
			<div class="flex items-center">
				<div class="flex-shrink-0">
					{/* <!-- Heroicon name: information-circle --> */}
					<svg
						class="h-5 w-5 text-blue-400"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<div class="ml-3 flex-1 md:flex md:justify-between items-center">
					<p class="text-sm text-blue-700">
						A new software update is available. See what’s new in
						version 2.0.4.
					</p>
					<p class="mt-3 text-sm md:mt-0 md:ml-6">
						<button class="inline-flex bg-blue-50 rounded-md p-1.5 text-blue-700 hover:text-blue-600 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-50 focus:ring-blue-600">
							Details <span aria-hidden="true">&rarr;</span>
						</button>
					</p>
				</div>
			</div>
		</div>
	);
}