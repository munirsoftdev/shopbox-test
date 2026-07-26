"use client";
import { usePathname } from "next/navigation";
import RotatingBanner from "./RotatingBanner";

export default function LayoutClientWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();

	// Determine banner visibility safely on the client side
	const showBanner = pathname === "/" || pathname.startsWith("/products");

	return (
		<>
			{showBanner && <RotatingBanner />}
			{children}
		</>
	);
}
