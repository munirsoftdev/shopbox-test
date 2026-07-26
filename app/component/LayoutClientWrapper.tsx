"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import RotatingBanner from "./RotatingBanner";

export default function LayoutClientWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();

	// Track the current path to detect changes during render
	const [prevPathname, setPrevPathname] = useState(pathname);
	const [isTransitioning, setIsTransitioning] = useState(false);

	// If the route changed, trigger the loader state during render
	if (pathname !== prevPathname) {
		setPrevPathname(pathname);
		setIsTransitioning(true);

		// Hide the loader shortly after the swap
		setTimeout(() => {
			setIsTransitioning(false);
		}, 300);
	}

	const showBanner = pathname === "/" || pathname.startsWith("/products");

	return (
		<>
			{/* Instant Global Spinner covering both Server delays and Client Cache hits */}
			{isTransitioning && (
				<div className="fixed inset-0 bg-white/60 backdrop-blur-xs flex flex-col items-center justify-center z-50">
					<div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin" />
					<p className="mt-4 text-pink-600 font-medium text-sm">Loading...</p>
				</div>
			)}

			{showBanner && <RotatingBanner />}
			{children}
		</>
	);
}
