import React from "react";
import Glide from "@glidejs/glide";
// import "./styles/glide.core.css";
// import "./styles/glide.theme.css";
import SlideViewCentered from "./Slides/SimpleCentered"
import SlideViewSplit from "./Slides/SplitWithImage"

export default (props) => {
	const glideRef = React.useRef(null);

	React.useEffect(() => {
		const glide = new Glide(glideRef.current).mount();
		console.log(glide);
	}, []);
	return (
		<>
			<div className="">
				<div className="glide" ref={glideRef}>
					<div className="glide__track" data-glide-el="track">
						<ul className="glide__slides">
							<li className="glide__slide">
								<SlideViewCentered />
							</li>
							<li className="glide__slide">
								<SlideViewSplit />
							</li>
							<li className="glide__slide">
								<SlideViewCentered />
							</li>
							<li className="glide__slide">
								<SlideViewSplit />
							</li>
						</ul>
					</div>
					<div
						className="glide__bullets"
						data-glide-el="controls[nav]"
					>
						<button className="glide__bullet" data-glide-dir="=0" />
						<button className="glide__bullet" data-glide-dir="=1" />
						<button className="glide__bullet" data-glide-dir="=2" />
						<button className="glide__bullet" data-glide-dir="=3" />
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
