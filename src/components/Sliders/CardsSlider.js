import React from "react";
import Glide from "@glidejs/glide";
import "./styles/glide.core.css";
import "./styles/glide.theme.css";
import TheCard from "../Cards/WithOverlay";

export default (props) => {
	const slides = ["indigo","pink","green","orange"];
	const glideRef = React.useRef(null);
	console.log(props)

	React.useEffect(() => {
		const dir = document?.documentElement?.dir || "ltr";
		const glide = new Glide(glideRef.current, {
			direction: dir,
		}).mount();
		console.log(glide);
	});
	return (
		<>
			<div className="">
				<div className="glide" ref={glideRef}>
					<div className="glide__track" data-glide-el="track">
						<ul className="glide__slides">
							{slides.map((s, index) => (
								<li key={index} className="glide__slide">
									<TheCard theme={s} />
								</li>
							))}
						</ul>
					</div>
					<div
						className="glide__bullets"
						data-glide-el="controls[nav]"
					>
						{slides.map((index) => (
							<button className="glide__bullet" data-glide-dir={`=#{index}`} />
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
		</>
	);
};
