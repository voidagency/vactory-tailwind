import React from "react";

export default (props) => {
	const firstRun = React.useRef(true);
	const [isRTL, setRTL] = React.useState(null);

	React.useEffect(
		() => {

			if (firstRun.current) {
				setRTL(document.dir === "rtl")
				firstRun.current = false;
				return;
			}

			document.dir = isRTL ? "rtl" : "ltr";
		},
		[isRTL]
	)

	return (
		<div dir="ltr" className="p-4 max-w-xs mx-auto bg-white rounded-xl shadow-xl absolute bottom-0 left-1/2 transform-gpu -translate-x-1/2 -translate-y-full flex items-center">
			LTR
			<button
				onClick={(e) => setRTL(!isRTL)}
				type="button"
				aria-pressed="false"
				className="mx-2 flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			>
				<span className="sr-only">Toggle Direction</span>
				<span
					aria-hidden="true"
					className={
						(isRTL ? "bg-indigo-600" : "bg-gray-200") +
						" absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200"
					}
				/>
				<span
					aria-hidden="true"
					className={
						(isRTL ? "translate-x-5" : "translate-x-0") +
						" absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200"
					}
				/>
			</button>
			RTL
		</div>
	);
}