"use client";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function TermsPage() {
	return (
		<div className="min-h-screen bg-gray-50 py-8 px-4">
			<div className="max-w-4xl mx-auto">
				{/* GO BACK BUTTON */}
				<Link
					href="/"
					className="inline-flex items-center gap-2 text-gray-600 hover:text-pink-600 mb-6 transition"
				>
					<FaArrowLeft size={16} />
					<span className="font-medium">Go back</span>
				</Link>

				{/* CONTENT CARD */}
				<article className="bg-white rounded-lg shadow-md border-gray-100 p-6 md:p-10">
					<h2 className="text-center text-2xl md:text-3xl font-bold text-pink-700 mb-4">
						Terms of Service
					</h2>
					<hr className="mb-6" />

					<div className="space-y-6 text-gray-700 text-sm md:text-base leading-7">
						<section>
							<strong className="text-gray-900">1. Introduction</strong>
							<br />
							These Terms of Service (&quot;Terms) govern your use of ShopBox, a
							platform for buying and selling goods online.
							<br />
							By accessing or using ShopBox, you agree to these Terms.
						</section>

						<section>
							<strong className="text-gray-900">2. Account Creation</strong>
							<br />
							To use ShopBox, you must create an account. You agree to provide
							accurate and complete information during the registration process.
						</section>

						<section>
							<strong className="text-gray-900">3. Order Process</strong>
							<br />
							- Orders are subject to availability and verification.
							<br />
							- We reserve the right to cancel or modify orders due to errors or
							unforeseen circumstances.
							<br />- Payment terms and shipping details will be provided during
							the checkout process.
						</section>

						<section>
							<strong className="text-gray-900">4. Returns and Refunds</strong>
							<br />
							Returns are accepted within{" "}
							<span className="text-pink-700 font-semibold">1 Month</span> of
							delivery.
							<br />
							- Refunds will be issued in the original payment method.
							<br />
							- Products must be in their original condition with all packaging
							and accessories included.
							<br />
							<span className="text-pink-700 font-bold">
								Your money back is guarantee !!!
							</span>
						</section>

						<section>
							<strong className="text-gray-900">5. Product Description</strong>
							<br />
							We strive to provide accurate product descriptions. However, we
							are not responsible for any minor discrepancies.
						</section>

						<section>
							<strong className="text-gray-900">
								6. Intellectual Property
							</strong>
							<br />
							All content on ShopBox, including product images and descriptions,
							is owned by ShopBox or its licensors.
						</section>

						<section>
							<strong className="text-gray-900">
								7. Liability and Indemnification
							</strong>
							<br />
							- ShopBox is not liable for any indirect or consequential damages.
							<br />- You agree to indemnify ShopBox against any claims or
							losses arising from your use of the platform.
						</section>

						<section>
							<strong className="text-gray-900">8. Termination</strong>
							<br />
							ShopBox reserves the right to terminate or suspend your account or
							access to the platform at any time.
						</section>

						<section>
							<strong className="text-gray-900">9. Governing Law</strong>
							<br />
							These Terms are governed by the laws of{" "}
							<span className="text-pink-700 font-semibold">Nigeria</span>.
						</section>

						<section>
							<strong className="text-gray-900">10. Changes to Terms</strong>
							<br />
							ShopBox may update these Terms at any time.
							<br />
							Your continued use of the platform constitutes acceptance of the
							updated Terms.
						</section>

						<p className="pt-4 border-t">
							By using ShopBox, you acknowledge that you have read, understood,
							and agree to these Terms.
						</p>
					</div>
				</article>
			</div>
		</div>
	);
}
