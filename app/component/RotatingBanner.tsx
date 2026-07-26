"use client";

import { useState, useEffect } from "react";

const texts = [
	"All your favorites are here",
	"We sell products at affordable prices",
];

export default function RotatingBanner() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % texts.length); // loop 0 -> 1 -> 0
		}, 4000);

		return () => clearInterval(interval); // cleanup
	}, []);

	return (
		<div className="w-full bg-pink-50 border-b border-pink-200 py-3 text-center">
			<p
				key={index} // key forces re-animation
				className="text-pink-700 font-medium text-sm md:text-base animate-fadeIn"
			>
				{texts[index]}
			</p>

			{/* dots indicator */}
			<div className="flex justify-center gap-2 mt-2">
				{texts.map((_, i) => (
					<div
						key={i}
						className={`w-2 h-2 rounded-full transition-all ${
							i === index ? "bg-pink-500 w-4" : "bg-orange-200"
						}`}
					/>
				))}
			</div>
		</div>
	);
}
