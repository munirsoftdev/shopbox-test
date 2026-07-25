"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState, Suspense } from "react";
import { FaCheckCircle } from "react-icons/fa";

// 1. Move the original logic into a sub-component that handles the search parameters
function OrderSuccessContent() {
	const searchParams = useSearchParams();
	const ref = searchParams.get("ref");
	const [order, setOrder] = useState<any>(null);

	useEffect(() => {
		const lastOrder = JSON.parse(localStorage.getItem("lastOrder") || "{}");
		setOrder(lastOrder);
	}, []);

	const arrivalDate = new Date();
	arrivalDate.setDate(arrivalDate.getDate() + 7);
	const formattedDate = arrivalDate.toLocaleDateString("en-NG", {
		weekday: "long",
		month: "long",
		day: "numeric",
		year: "numeric",
	});

	if (!order) return <p className="text-center py-20">Loading...</p>;

	return (
		<div className="container mx-auto px-4 py-16">
			<div className="text-center mb-8">
				<FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
				<h2 className="text-3xl font-bold">Payment Successful!</h2>
				<p className="text-gray-600">Your order has been placed</p>
			</div>

			<div className="bg-white p-6 rounded-lg shadow max-w-2xl mx-auto">
				<div className="grid grid-cols-2 gap-2 mb-4">
					<p>
						<strong>Order ID:</strong>
					</p>{" "}
					<p className="text-right">{ref}</p>
					<p>
						<strong>Delivery Date:</strong>
					</p>{" "}
					<p className="text-right text-green-600 font-semibold">
						{formattedDate}
					</p>
				</div>

				<h3 className="font-bold mt-4 mb-2 border-t pt-4">Items Ordered:</h3>
				{order.cart?.map((item: any) => (
					<div key={item.id} className="flex justify-between py-1 text-sm">
						<span>
							{item.title} x {item.quantity}
						</span>
						<span>₦{(item.price * item.quantity).toLocaleString()}</span>
					</div>
				))}

				<div className="flex justify-between font-bold border-t mt-2 pt-2">
					<span>Total Paid:</span>
					<span>₦{order.total?.toLocaleString()}</span>
				</div>

				<div className="mt-4 border-t pt-4">
					<p>
						<strong>Shipping to:</strong>
					</p>
					<p>{order.customer?.fullName}</p>
					<p>
						{order.customer?.address}, {order.customer?.city}
					</p>
					<p>{order.customer?.phone}</p>
				</div>
			</div>

			<div className="text-center mt-6">
				<Link
					href="/"
					className="bg-pink-900 text-white px-6 py-3 rounded-lg hover:bg-pink-600"
				>
					Continue Shopping
				</Link>
			</div>
		</div>
	);
}

// 2. Export the main page component wrapped in Suspense so Next.js ignores it during static pre-rendering
export default function OrderSuccessPage() {
	return (
		<Suspense
			fallback={<p className="text-center py-20">Loading order info...</p>}
		>
			<OrderSuccessContent />
		</Suspense>
	);
}
