import type { Metadata } from "next";
import "./globals.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ScrollToTop from "./component/ScrollToTop";
import { ShopProvider } from "./context/shopContext";
import LayoutClientWrapper from "./component/LayoutClientWrapper";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
	title: "ShopBox",
	icons: {
		icon: "favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="min-h-full flex flex-col">
				<ShopProvider>
					<Header />
					<Suspense fallback={<Loading />}>
						<LayoutClientWrapper>
							<ScrollToTop />
							<main className="flex-1">{children}</main>
							<Footer />
						</LayoutClientWrapper>
					</Suspense>
				</ShopProvider>
			</body>
		</html>
	);
}
