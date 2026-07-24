import type { Metadata } from "next";
import "./globals.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ScrollToTop from "./component/ScrollToTop";
import { ShopProvider } from "./context/shopContext";

export const metadata: Metadata = {
	title: "ShopBox",
	icons: {
		icon: "/ShopBox.png",
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
					<ScrollToTop />
					<main className="flex-1">{children}</main>
					<Footer />
				</ShopProvider>
			</body>
		</html>
	);
}
