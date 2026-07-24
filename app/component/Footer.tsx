"use client";
import Link from "next/link";
import {
	MdLocationOn,
	MdEmail,
	MdPhone,
	MdFacebook,
	MdHeadsetMic,
	MdSecurity,
	MdLocalShipping,
} from "react-icons/md";
import { FaInstagram, FaTwitter, FaTelegram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="bg-zinc-900 text-gray-300 mt-16">
			<div className="container mx-auto px-4 py-12">
				{/* TOP SECTION */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-zinc-800">
					{/* Column 1: Logo + About */}
					<div>
						<Link href="/" className="flex items-center gap-2 mb-4">
							<h3 className="text-2xl font-extrabold text-white">
								Shop<span className="text-pink-500">Box</span>
							</h3>
						</Link>
						<p className="text-sm text-gray-400 leading-relaxed">
							Your trusted online store for Phones, Laptops, Fashion, and more.
							Fast delivery across Nigeria.
						</p>

						{/* Social Icons */}
						<div className="flex gap-4 mt-4">
							<Link href="#" className="hover:text-pink-500 transition">
								<MdFacebook size={22} />
							</Link>
							<Link href="#" className="hover:text-pink-500 transition">
								<FaInstagram size={22} />
							</Link>
							<Link href="#" className="hover:text-pink-500 transition">
								<FaTwitter size={22} />
							</Link>
							<Link href="#" className="hover:text-pink-500 transition">
								<FaTelegram size={22} />
							</Link>
							<Link href="#" className="hover:text-pink-500 transition">
								<FaWhatsapp size={22} />
							</Link>
						</div>
					</div>

					{/* Column 2: Quick Links */}
					<div>
						<h4 className="text-white font-semibold mb-4">Quick Links</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<Link href="/" className="hover:text-pink-500">
									Home
								</Link>
							</li>

							<li>
								<Link href="/pages/about" className="hover:text-pink-500">
									About Us
								</Link>
							</li>
							<li>
								<Link href="/pages/admin" className="hover:text-pink-500">
									Admin
								</Link>
							</li>
						</ul>
					</div>

					{/* Column 3: Customer Service */}
					<div>
						<h4 className="text-white font-semibold mb-4">Customer Service</h4>
						<ul className="space-y-2 text-sm">
							<li className="flex items-center gap-2">
								<MdLocalShipping size={18} className="text-pink-500" />
								<span>Free Shipping Over ₦50,000</span>
							</li>
							<li className="flex items-center gap-2">
								<MdSecurity size={18} className="text-pink-500" />
								<span>Secure Payment</span>
							</li>
							<li className="flex items-center gap-2">
								<MdHeadsetMic size={18} className="text-pink-500" />
								<span>24/7 Support</span>
							</li>
						</ul>
					</div>

					{/* Column 4: Contact */}
					<div>
						<h4 className="text-white font-semibold mb-4">Contact Us</h4>
						<ul className="space-y-3 text-sm">
							<li className="flex items-start gap-2">
								<MdLocationOn size={18} className="text-pink-500 mt-1" />
								<span>Kubau, Kaduna State, Nigeria</span>
							</li>
							<li className="flex items-center gap-2">
								<MdPhone size={18} className="text-pink-500" />
								<span>+2348149701155</span>
							</li>
							<li className="flex items-center gap-2">
								<MdEmail size={18} className="text-pink-500" />
								<span>support@shopbox.ng</span>
							</li>
						</ul>
					</div>
				</div>

				{/* BOTTOM SECTION */}
				<div className="flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-gray-500">
					<p>© {new Date().getFullYear()} ShopBox. All rights reserved.</p>
					<div className="flex gap-4 mt-3 md:mt-0">
						<Link href="/pages/privacy" className="hover:text-pink-500">
							Privacy Policy
						</Link>
						<Link href="/pages/TermsOfServices" className="hover:text-pink-500">
							Terms of Service
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
