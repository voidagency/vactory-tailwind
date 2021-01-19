import React from "react";
// https://tailwindui.com/components/marketing/sections/blog-sections#component-3c03ccd20ac3049cac17806170b312ca

export default (props) => {
	return (
		<div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
			<div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
				<div>
					<h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
						Press
					</h2>
					<div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
						<p className="text-xl text-gray-500">
							Get weekly articles in your inbox on how to grow
							your business.
						</p>
						<form className="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
							<div>
								<label
								htmlFor="email-address"
									className="sr-only"
								>
									Email address
								</label>
								<input
									id="email-address"
									name="email-address"
									type="email"
									autoComplete="email"
									required
									className="appearance-none w-full px-4 py-2 border border-gray-300 text-base rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 lg:max-w-xs"
									placeholder="Enter your email"
								/>
							</div>
							<div className="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ltr:ml-3 sm:rtl:mr-3 sm:w-auto sm:inline-flex">
								<button
									type="button"
									className="w-full bg-indigo-600 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:inline-flex"
								>
									Notify me
								</button>
							</div>
						</form>
					</div>
				</div>
				<div className="mt-6 pt-10 grid gap-16 lg:grid-cols-1 lg:gap-x-5 lg:gap-y-12">
					<div>
						<div className="rtl:space-x-reverse space-x-3">
							<a href="#!" className="inline-block">
								<span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
									Article
								</span>
							</a>
							<a href="#!" className="inline-block">
								<span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
									Dev
								</span>
							</a>
							<a href="#!" className="inline-block">
								<span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
									Casablanca
								</span>
							</a>
						</div>
						<p className="mt-2 text-sm text-gray-500">
							<time dateTime="2020-03-16">Mar 16, 2020</time>
						</p>
						<a href="#!" className="mt-2 block">
							<p className="text-xl font-semibold text-gray-900">
								Boost your conversion rate
							</p>
							<p className="mt-3 text-base text-gray-500">
								Illo sint voluptas. Error voluptates culpa
								eligendi. Hic vel totam vitae illo. Non aliquid
								explicabo necessitatibus unde. Sed
								exercitationem placeat consectetur nulla
								deserunt vel. Iusto corrupti dicta.
							</p>
						</a>
						<div className="mt-3">
							<a
								href="#!"
								className="text-base font-semibold text-indigo-600 hover:text-indigo-500"
							>
								Read full story
							</a>
						</div>
					</div>

					<div>
						<div className="rtl:space-x-reverse space-x-3">
							<a href="#!" className="inline-block">
								<span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
									Article
								</span>
							</a>
							<a href="#!" className="inline-block">
								<span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
									Video
								</span>
							</a>
							<a href="#!" className="inline-block">
								<span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
									Rabat
								</span>
							</a>
						</div>
						<p className="mt-3 text-sm text-gray-500">
							<time dateTime="2020-03-10">Mar 10, 2020</time>
						</p>
						<a href="#!" className="mt-2 block">
							<p className="text-xl font-semibold text-gray-900">
								How to use search engine optimization to drive
								sales
							</p>
							<p className="mt-3 text-base text-gray-500">
								Optio cum necessitatibus dolor voluptatum
								provident commodi et. Qui aperiam fugiat nemo
								cumque.
							</p>
						</a>
						<div className="mt-3">
							<a
								href="#!"
								className="text-base font-semibold text-indigo-600 hover:text-indigo-500"
							>
								Read full story
							</a>
						</div>
					</div>

					<div>
						<div className="rtl:space-x-reverse space-x-3">
							<a href="#!" className="inline-block">
								<span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
									Article
								</span>
							</a>
							<a href="#!" className="inline-block">
								<span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
									Dev
								</span>
							</a>
							<a href="#!" className="inline-block">
								<span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
									Casablanca
								</span>
							</a>
						</div>
						<p className="mt-3 text-sm text-gray-500">
							<time dateTime="2020-02-12">Feb 12, 2020</time>
						</p>
						<a href="#!" className="mt-2 block">
							<p className="text-xl font-semibold text-gray-900">
								Improve your customer experience
							</p>
							<p className="mt-3 text-base text-gray-500">
								Cupiditate maiores ullam eveniet adipisci in
								doloribus nulla minus. Voluptas iusto libero
								adipisci rem et corporis.
							</p>
						</a>
						<div className="mt-3">
							<a
								href="#!"
								className="text-base font-semibold text-indigo-600 hover:text-indigo-500"
							>
								Read full story
							</a>
						</div>
					</div>

					<div>
						<div className="rtl:space-x-reverse space-x-3">
							<a href="#!" className="inline-block">
								<span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
									Article
								</span>
							</a>
							<a href="#!" className="inline-block">
								<span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
									Dev
								</span>
							</a>
							<a href="#!" className="inline-block">
								<span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
									Tanger
								</span>
							</a>
						</div>
						<p className="mt-3 text-sm text-gray-500">
							<time dateTime="2020-01-29">Jan 29, 2020</time>
						</p>
						<a href="#!" className="mt-2 block">
							<p className="text-xl font-semibold text-gray-900">
								Writing effective landing page copy
							</p>
							<p className="mt-3 text-base text-gray-500">
								Ipsum voluptates quia doloremque culpa qui eius.
								Id qui id officia molestias quaerat deleniti.
								Qui facere numquam autem libero quae cupiditate
								asperiores vitae cupiditate. Cumque id deleniti
								explicabo.
							</p>
						</a>
						<div className="mt-3">
							<a
								href="#!"
								className="text-base font-semibold text-indigo-600 hover:text-indigo-500"
							>
								Read full story
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
