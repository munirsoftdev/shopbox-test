"use client";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-gray-50 py-8 px-4">
			<div className="max-w-3xl mx-auto">
				{/* GO BACK BUTTON */}
				<Link
					href="/"
					className="inline-flex items-center gap-2 text-gray-600 hover:text-pink-600 mb-6 transition"
				>
					<FaArrowLeft size={16} />
					<span className="font-medium">Go back</span>
				</Link>

				{/* CONTENT CARD */}
				<article className="bg-white rounded-lg shadow-md border-gray-100 p-6 md:p-10 text-center">
					{/* ABOUT SECTION */}
					<h2 className="text-2xl md:text-3xl font-bold text-pink-800 mb-4">
						About Us
					</h2>
					<hr className="mb-6" />

					<p className="text-gray-700 text-sm md:text-base leading-7 mb-8">
						<strong className="text-green-900 text-2xl">
							ShopBox:{" "}
							<span className="text-pink-800">
								{" "}
								<br />
							</span>
						</strong>
						Is a Company that is Founded for the purpose of business across the
						globe <span className="font-semibold">(all over the world)</span>.
						<br />
						<br />
						We sell different kinds of Products
					</p>

					{/* FOUNDER SECTION */}
					<h2 className="text-2xl md:text-3xl font-bold text-pink-800 mb-4">
						The Founder of The Company
					</h2>
					<hr className="mb-6" />

					<div className="space-y-2">
						<h4 className="text-xl font-semibold text-green-800">
							Assalamu Alaikum
						</h4>
						<h4 className="text-lg text-gray-800">
							My name is <span className="text-pink-800 font-bold">Munir</span>
						</h4>
						<h4 className="text-lg text-gray-800">
							I&apos;m a{" "}
							<span className="text-pink-800 font-bold">Software</span> Engineer
						</h4>
					</div>

					{/* ROLE SECTION */}
					<h2 className="text-2xl md:text-3xl font-bold text-pink-800 mt-10 mb-4">
						Role
					</h2>
					<div className="text-green-800 font-semibold space-y-1">
						<p>Chief Executive Officer (CEO)</p>
						<p>Chief Technology Officer (CTO)</p>
						<p>Developer, Programmer, Entrepreneur</p>
					</div>
				</article>
			</div>
		</div>
	);
}
