import React from 'react'

export default {
	title: "Primitives/Buttons/States",
};


export const Success = () => {
	return (
		<>
		{["px-3 py-2 text-sm leading-4", "px-6 py-3 text-base"].map( size => (
			<div className="flex flex-col md:flex-row flex-wrap items-center space-y-2 md:space-y-0 my-5 space-x-5 justify-center">

				<button type="button" className={`inline-flex items-center border border-transparent ${size} font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
					Button Primary
				</button>

				<button type="button" className={`inline-flex items-center border border-transparent ${size} font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
					Button Secondary
				</button>

				<button type="button" className={`inline-flex items-center border border-green-300 shadow-sm ${size} font-medium rounded-md text-green-700 bg-white hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
					Button Transparent
				</button>

				<button type="button" className={`inline-flex items-center border border-transparent ${size} font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
					Rounded Corners
				</button>

			</div>
		))}
		</>
	)
}

export const Error = () => {
	return (
		<>
		{["px-3 py-2 text-sm leading-4", "px-6 py-3 text-base"].map( size => (
			<div className="flex flex-col md:flex-row flex-wrap items-center space-y-2 md:space-y-0 my-5 space-x-5 justify-center">

				<button type="button" className={`inline-flex items-center border border-transparent ${size} font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
					Button Primary
				</button>

				<button type="button" className={`inline-flex items-center border border-transparent ${size} font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
					Button Secondary
				</button>

				<button type="button" className={`inline-flex items-center border border-red-300 shadow-sm ${size} font-medium rounded-md text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
					Button Transparent
				</button>

				<button type="button" className={`inline-flex items-center border border-transparent ${size} font-medium rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
					Rounded Corners
				</button>

			</div>
		))}
		</>
	)
}

export const Info = () => {
	return (
		<>
		{["px-3 py-2 text-sm leading-4", "px-6 py-3 text-base"].map( size => (
			<div className="flex flex-col md:flex-row flex-wrap items-center space-y-2 md:space-y-0 my-5 space-x-5 justify-center">

				<button type="button" className={`inline-flex items-center border border-transparent ${size} font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
					Button Primary
				</button>

				<button type="button" className={`inline-flex items-center border border-transparent ${size} font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
					Button Secondary
				</button>

				<button type="button" className={`inline-flex items-center border border-blue-300 shadow-sm ${size} font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
					Button Transparent
				</button>

				<button type="button" className={`inline-flex items-center border border-transparent ${size} font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
					Rounded Corners
				</button>

			</div>
		))}
		</>
	)
}

export const Warning = () => {
	return (
		<>
		{["px-3 py-2 text-sm leading-4", "px-6 py-3 text-base"].map( size => (
			<div className="flex flex-col md:flex-row flex-wrap items-center space-y-2 md:space-y-0 my-5 space-x-5 justify-center">

				<button type="button" className={`inline-flex items-center border border-transparent ${size} font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
					Button Primary
				</button>

				<button type="button" className={`inline-flex items-center border border-transparent ${size} font-medium rounded-md text-yellow-700 bg-yellow-100 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
					Button Secondary
				</button>

				<button type="button" className={`inline-flex items-center border border-yellow-300 shadow-sm ${size} font-medium rounded-md text-yellow-700 bg-white hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
					Button Transparent
				</button>

				<button type="button" className={`inline-flex items-center border border-transparent ${size} font-medium rounded-full shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
					Rounded Corners
				</button>

			</div>
		))}
		</>
	)
}
