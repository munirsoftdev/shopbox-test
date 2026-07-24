"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { useShop } from "../../context/shopContext";

// Define the precise configuration structure for the Flutterwave overlay
interface FlutterwaveConfig {
	public_key: string;
	tx_ref: string;
	amount: number;
	currency: string;
	payment_options: string;
	customer: {
		email: string;
		name: string;
		phone_number: string;
	};
	customizations: {
		title: string;
		description: string;
		logo: string;
	};
	callback: (response: {
		tx_ref: string;
		status: string;
		transaction_id?: number;
	}) => void;
	onclose: () => void;
}

declare global {
	interface Window {
		FlutterwaveCheckout: (config: FlutterwaveConfig) => void;
	}
}

export default function CheckoutPage() {
	const { cart, cartTotal, clearCart } = useShop();
	const router = useRouter();

	const [form, setForm] = useState({
		fullName: "",
		email: "",
		phone: "",
		address: "",
		city: "",
	});

	const pay = () => {
		if (!form.email || !form.fullName || !form.address) {
			return alert("Please fill all delivery fields");
		}

		if (typeof window === "undefined" || !window.FlutterwaveCheckout) {
			return alert("Payment gateway is loading. Please try again in a moment.");
		}

		// 1. Generate unique reference safely inside your click event handler
		const uniqueTxRef = `TM_${Date.now()}`;

		// 2. Open Flutterwave using the native window handler instance
		window.FlutterwaveCheckout({
			public_key: process.env.NEXT_PUBLIC_FLW_PUBLIC_KEY!,
			tx_ref: uniqueTxRef,
			amount: cartTotal + 2000,
			currency: "NGN",
			payment_options: "card,banktransfer,ussd,account",
			customer: {
				email: form.email,
				name: form.fullName,
				phone_number: form.phone,
			},
			customizations: {
				title: "shopbox-test",
				description: `Payment for ${cart.length} items`,
				logo: "https://flutterwave.com",
			},
			callback: (response) => {
				localStorage.setItem(
					"lastOrder",
					JSON.stringify({
						ref: response.tx_ref,
						cart,
						total: cartTotal + 2000,
						customer: form,
					}),
				);

				clearCart();
				router.push(`/pages/order-success?ref=${response.tx_ref}`);
			},
			onclose: () => {
				alert("Payment model closed by user.");
			},
		});
	};

	return (
		<div className="container mx-auto px-4 py-8 max-w-3xl">
			{/* 3. Inject optimized Flutterwave script asynchronously */}
			<Script src="https://flutterwave.com" strategy="lazyOnload" />

			<h2 className="text-2xl font-bold mb-6">Checkout</h2>
			<div className="grid md:grid-cols-2 gap-8">
				{/* Delivery Form */}
				<div className="bg-white p-6 rounded-lg shadow space-y-3">
					<h3 className="font-bold text-lg">Delivery Information</h3>
					<input
						name="fullName"
						value={form.fullName}
						placeholder="Full Name"
						onChange={(e) =>
							setForm({ ...form, [e.target.name]: e.target.value })
						}
						className="w-full border p-3 rounded"
						required
					/>
					<input
						type="email"
						name="email"
						value={form.email}
						placeholder="Email"
						onChange={(e) =>
							setForm({ ...form, [e.target.name]: e.target.value })
						}
						className="w-full border p-3 rounded"
						required
					/>
					<input
						name="phone"
						value={form.phone}
						placeholder="Phone"
						onChange={(e) =>
							setForm({ ...form, [e.target.name]: e.target.value })
						}
						className="w-full border p-3 rounded"
						required
					/>
					<textarea
						name="address"
						value={form.address}
						placeholder="Address"
						onChange={(e) =>
							setForm({ ...form, [e.target.name]: e.target.value })
						}
						className="w-full border p-3 rounded"
						required
					/>
					<input
						name="city"
						value={form.city}
						placeholder="City"
						onChange={(e) =>
							setForm({ ...form, [e.target.name]: e.target.value })
						}
						className="w-full border p-3 rounded"
						required
					/>
				</div>

				{/* Summary */}
				<div className="bg-white p-6 rounded-lg shadow h-fit">
					<h3 className="font-bold text-lg mb-4">Order Summary</h3>
					{cart.map((item) => (
						<div key={item.id} className="flex justify-between text-sm mb-2">
							<span>
								{item.title} x{item.quantity}
							</span>
							<span>₦{(item.price * item.quantity).toLocaleString()}</span>
						</div>
					))}
					<div className="border-t pt-2 mt-2">
						<div className="flex justify-between">
							<span>Subtotal</span>
							<span>₦{cartTotal.toLocaleString()}</span>
						</div>
						<div className="flex justify-between">
							<span>Delivery</span>
							<span>₦2,000</span>
						</div>
						<div className="flex justify-between font-bold text-lg mt-2">
							<span>Total</span>
							<span>₦{(cartTotal + 2000).toLocaleString()}</span>
						</div>
					</div>
					<button
						onClick={pay}
						className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4 font-bold hover:bg-blue-700"
					>
						Pay with Flutterwave
					</button>
				</div>
			</div>
		</div>
	);
}
