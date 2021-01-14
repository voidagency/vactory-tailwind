import React from "react";
// https://tailwindui.com/components/marketing/sections/stats-sections#component-da2f699b57da2cabac8c760a8d34f6a6

export default (props) => {
	return (
		<div class="bg-indigo-800">
			<div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
				<div class="max-w-4xl mx-auto text-center">
					<h2 class="text-3xl font-extrabold text-white sm:text-4xl">
						Trusted by developers from over 80 planets
					</h2>
					<p class="mt-3 text-xl text-indigo-200 sm:mt-4">
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Repellendus repellat laudantium.
					</p>
				</div>
				<dl class="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
					<div class="flex flex-col">
						<dt class="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
							Pepperoni
						</dt>
						<dd class="order-1 text-5xl font-extrabold text-white">
							100%
						</dd>
					</div>
					<div class="flex flex-col mt-10 sm:mt-0">
						<dt class="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
							Delivery
						</dt>
						<dd class="order-1 text-5xl font-extrabold text-white">
							24/7
						</dd>
					</div>
					<div class="flex flex-col mt-10 sm:mt-0">
						<dt class="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
							Calories
						</dt>
						<dd class="order-1 text-5xl font-extrabold text-white">
							100k+
						</dd>
					</div>
				</dl>
			</div>
		</div>
	);
};
