import React from "react";
import Glide from "@glidejs/glide";

const items = [
	"https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
	"https://images.unsplash.com/photo-1469218692818-d972c42c4864?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
	"https://images.unsplash.com/photo-1526328828355-69b01701ca6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
	"https://images.unsplash.com/photo-1606811842243-af7e16970c1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
];

export const VideoThambnail = ({ image = items[0] }) => {
	return (
		<div className="relative mx-auto w-full h-full rounded-lg shadow-lg max-w-sm lg:max-w-lg">
			<button
				type="button"
				className="aspect-h-3 aspect-w-4 relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none"
			>
				<span className="sr-only">Watch our video to learn more</span>
				<img className="w-full object-cover" src={image} alt="image" />
				<div
					className="absolute inset-0 w-full h-full flex items-center justify-center"
					aria-hidden="true"
				>
					<svg
						className="h-20 w-20 text-indigo-500"
						fill="currentColor"
						viewBox="0 0 84 84"
					>
						<circle
							opacity="0.9"
							cx={42}
							cy={42}
							r={42}
							fill="white"
						/>
						<path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
					</svg>
				</div>
			</button>
		</div>
	);
};

export default (props) => {
	const glideRef = React.useRef(null);

	React.useEffect(() => {
		const glide = new Glide(glideRef.current).mount();
		console.log(glide);
	}, []);

	return (
		<div className="mt-12 pb-12 relative max-w-lg lg:max-w-2xl sm:mx-auto overflow-hidden">
			<svg
				className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100"
				width={640}
				height={784}
				fill="none"
				viewBox="0 0 640 784"
				aria-hidden="true"
			>
				<defs>
					<pattern
						id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
						x={118}
						y={0}
						width={20}
						height={20}
						patternUnits="userSpaceOnUse"
					>
						<rect
							x={0}
							y={0}
							width={4}
							height={4}
							className="text-gray-200"
							fill="currentColor"
						/>
					</pattern>
				</defs>
				<rect
					y={72}
					width={640}
					height={640}
					className="text-gray-50"
					fill="currentColor"
				/>
				<rect
					x={118}
					width={404}
					height={784}
					fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
				/>
			</svg>

			<div className="glide" ref={glideRef}>
				<div className="glide__track" data-glide-el="track">
					<ul className="glide__slides">
						{items.map((item, i) => (
							<li key={i} className="glide__slide">
								<VideoThambnail image={item} />
							</li>
						))}
					</ul>
				</div>
				<div className="glide__bullets" data-glide-el="controls[nav]">
					{items.map((_, index) => (
						<button
							key={index}
							className="glide__bullet"
							data-glide-dir={`=${index}`}
						/>
					))}
				</div>
				<div className="glide__arrows" data-glide-el="controls">
					<button
						className="glide__arrow glide__arrow--left"
						data-glide-dir="<"
					>
						prev
					</button>
					<button
						className="glide__arrow glide__arrow--right"
						data-glide-dir=">"
					>
						next
					</button>
				</div>
			</div>
		</div>
	);
};
