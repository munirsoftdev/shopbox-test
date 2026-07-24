"use client";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function PrivacyPage() {
	return (
		<div className="min-h-screen bg-gray-50 py-8 px-4">
			<div className="container mx-auto max-w-4xl">
				{/* GO BACK BUTTON */}
				<Link
					href="/"
					className="inline-flex items-center gap-2 text-gray-600 hover:text-pink-600 mb-6 transition"
				>
					<FaArrowLeft size={16} />
					<span className="text-sm font-medium">Go back</span>
				</Link>

				{/* CONTENT CARD */}
				<article className="bg-white shadow-md rounded-lg p-6 md:p-10 border-gray-100">
					<h2 className="text-center text-2xl md:text-3xl font-bold text-pink-700 mb-6">
						Privacy and Policy
					</h2>
					<hr className="mb-6" />

					<div className="space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">
						<div>
							<strong className="text-gray-900">1. Introduction</strong>
							<br />
							ShopBox is committed to protecting your personal data. This
							Privacy Policy explains how we collect, use, and protect your
							information.
						</div>

						<div>
							<strong className="text-gray-900">
								2. Information We Collect
							</strong>
							<br />
							<strong>- Personal Data:</strong> Name, email address, phone
							number, and shipping address.
							<br />
							<strong>- Payment Information:</strong> Credit/debit card details,
							PayPal information, or other payment methods.
							<br />
							<strong>- Usage Data:</strong> Browsing history, IP address,
							device type, and operating system.
						</div>

						<div>
							<strong className="text-gray-900">
								3. How We Use Your Information
							</strong>
							<br />
							<strong>- Order Processing:</strong> To process and fulfill your
							orders.
							<br />
							<strong>- Customer Support:</strong> To respond to your inquiries
							and provide support.
							<br />
							<strong>- Marketing:</strong> To send you promotional materials
							and updates about our products.
						</div>

						<div>
							<strong className="text-gray-900">4. Data Sharing</strong>
							<br />
							<strong>- Payment Processors:</strong> We share payment
							information with third-party payment processors.
							<br />
							<strong>- Shipping Carriers:</strong> We share shipping
							information with carriers to deliver your orders.
							<br />
							<strong>- Service Providers:</strong> We may share data with
							service providers who help us operate our business.
						</div>

						<div>
							<strong className="text-gray-900">5. Security Measures</strong>
							<br />
							We implement robust security measures to protect your data,
							including:
							<br />
							<strong>- Encryption:</strong> We encrypt sensitive information,
							such as payment details.
							<br />
							<strong>- Secure Servers:</strong> Our servers are secured with
							industry-standard protocols.
						</div>

						<div>
							<strong className="text-gray-900">6. Cookies and Tracking</strong>
							<br />
							We use cookies and tracking technologies to:
							<br />
							<strong>- Improve User Experience:</strong> Enhance your browsing
							experience and provide personalized content.
							<br />
							<strong>- Analytics:</strong> Analyze website traffic and usage
							patterns.
						</div>

						<div>
							<strong className="text-gray-900">7. Your Rights</strong>
							<br />
							You have the right to:
							<br />
							<strong>- Access:</strong> Request a copy of your personal data.
							<br />
							<strong>- Rectification:</strong> Update or correct your personal
							data.
							<br />
							<strong>- Deletion:</strong> Request deletion of your personal
							data.
						</div>

						<div>
							<strong className="text-gray-900">
								8. Changes to this Policy
							</strong>
							<br />
							We may update this Privacy Policy at any time. Your continued use
							of ShopBox constitutes acceptance of the updated policy.
						</div>
					</div>
				</article>
			</div>
		</div>
	);
}
