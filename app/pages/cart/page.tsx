"use client";
import Image from "next/image";
import Link from "next/link";
import {
	FaTrash,
	FaPlus,
	FaMinus,
	FaShoppingCart,
	FaArrowLeft,
} from "react-icons/fa";
import { useShop } from "../../context/shopContext"; // check path + casing

export default function CartPage() {
	const { cart, cartTotal, increaseQty, decreaseQty, removeFromCart } =
		useShop();

	if (cart.length === 0) {
		return (
			<div className="container mx-auto px-4 py-8">
				<Link
					href="/"
					className="inline-flex items-center gap-2 text-gray-600 hover:text-pink-600 mb-6 transition"
				>
					<FaArrowLeft size={16} />
					<span className="text-sm font-medium">Go back</span>
				</Link>
				<div className="container mx-auto px-4 py-16 text-center">
					<FaShoppingCart className="text-6xl mx-auto text-gray-300 mb-4" />
					<h2 className="text-2xl font-bold">Your Cart is Empty</h2>
					<Link href="/" className="text-pink-900 mt-4 inline-block">
						Continue Shopping
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<Link
				href="/"
				className="inline-flex items-center gap-2 text-gray-600 hover:text-pink-600 mb-6 transition"
			>
				<FaArrowLeft size={16} />
				<span className="text-sm font-medium">Go back</span>
			</Link>
			<h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
			<div className="grid lg:grid-cols-3 gap-8">
				{/* Cart Items */}
				<div className="lg:col-span-2 space-y-4">
					{cart.map((item) => (
						<div
							key={item.id}
							className="flex gap-4 bg-white p-4 rounded-lg shadow"
						>
							<div className="relative w-24 h-24">
								<Image
									src={item.image}
									alt={item.title}
									fill
									sizes="(max-width:768px) 100vw 33vws"
									className="object-contain"
								/>
							</div>
							<div className="flex-1">
								<h3 className="font-semibold">{item.title}</h3>
								<p className="text-lg font-bold text-pink-500">
									₦{item.price.toLocaleString()}
								</p>

								<div className="flex items-center gap-3 mt-2">
									<button
										onClick={() => decreaseQty(item.id)}
										className="p-1 border rounded"
									>
										<FaMinus size={10} />
									</button>
									<span>{item.quantity}</span>
									<button
										onClick={() => increaseQty(item.id)}
										className="p-1 border rounded"
									>
										<FaPlus size={10} />
									</button>
								</div>
							</div>
							<button
								onClick={() => removeFromCart(item.id)}
								className="text-red-500"
							>
								<FaTrash />
							</button>
						</div>
					))}
				</div>

				{/* Order Summary */}
				<div className="bg-white p-6 rounded-lg shadow h-fit">
					<h3 className="text-xl font-bold mb-4">Order Summary</h3>
					<div className="flex justify-between mb-2">
						<span>Subtotal</span>
						<span>₦{cartTotal.toLocaleString()}</span>
					</div>
					<div className="flex justify-between mb-4">
						<span>Delivery</span>
						<span>Free</span>
					</div>
					<div className="flex justify-between text-lg font-bold border-t pt-4">
						<span>Total</span>
						<span>₦{cartTotal.toLocaleString()}</span>
					</div>
					<Link href="/pages/checkout" className="block">
						<button className="w-full bg-pink-700 text-white py-3 rounded-lg mt-4 hover:bg-pink-600">
							Proceed to Checkout
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
