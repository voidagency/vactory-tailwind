import React from 'react';
import {CardA, CardB} from '../../components'
import ColoredFooter from "../../components/Cards/ColoredFooter";

export default {
	title: "Sections/Cards",
};

export const CardAExemple = () => <CardA
	image="https://source.unsplash.com/random/300x300"
	title="What Blockchain Could Mean for Your Health Data"
	tags={["Actualités", "Economie"]}
	url="/fr/news/what-blockchain-could-mean-your-health-data"
	styleclassName=""
/>

export const CardBExemple = () => <CardB
	image="https://backend.v3.capital-azur.com/sites/default/files/2020-11/cardservice1.png"
	title="Perfomance"
	tw={{
		'wrapper': 'my-8',
		'title': 'font-serif',
	}}
/>


export const Card2 = () => {
	return (
		<div>
			<hr className="my-10"/>
			<div className="max-w-md mx-auto bg-white dark:bg-black rounded-xl shadow-md overflow-hidden md:max-w-2xl">
			<div className="md:flex">
				<div className="md:flex-shrink-0">
					<img
						className="h-48 w-full object-cover md:w-48"
						src="https://source.unsplash.com/random/300x300"
						alt="Man looking at item at a store"
					/>
				</div>
				<div className="p-8">
				<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
				<a href="#!" className="block mt-1 text-lg leading-tight font-medium text-black dark:text-white hover:underline">Finding customers for your new business</a>
				<p className="mt-2 text-gray-500 dark:text-gray-400 dark">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
				</div>
			</div>
			</div>
			<hr className="my-10"/>
		</div>
	)
}

export const WithColoredFooter = () => {
	return <ColoredFooter />
}