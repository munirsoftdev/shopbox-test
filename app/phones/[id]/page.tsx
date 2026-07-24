"use client";
import { useParams } from "next/navigation"; // to get the id from url
import Image from "next/image";
import { phones } from "../../data/phones"; // go up 3 levels
import { useShop } from "../../context/shopContext";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function ProductDetailPage() {
	const { id } = useParams(); // gets "iphone-15-pro" from url
	const { addToCart } = useShop();
	const [qty, setQty] = useState(1);

	// find the product in our phones array
	const product = phones.find((p) => p.id === id);

	if (!product) {
		return (
			<div className="container mx-auto p-8 text-center">Product Not Found</div>
		);
	}

	const handleAddToCart = () => {
		for (let i = 0; i < qty; i++) {
			// add multiple qty
			addToCart(product);
		}
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<Link
				href="/"
				className="inline-flex items-center gap-2 text-gray-600 hover:text-pink-600 mb-6 transition"
			>
				<FaArrowLeft size={16} />
				<span className="text-sm font-medium">Go back</span>
			</Link>
			<div className="grid md:grid-cols-2 gap-8">
				{/* Left: Image */}
				<div className="bg-white p-6 rounded-lg shadow">
					<div className="relative w-full h-96">
						<Image
							src={product.image}
							alt={product.title}
							fill
							preload={true}
							sizes="(max-width: 768px) 100vw, 50vw"
							className="object-contain"
						/>
					</div>
				</div>
				{/* Right: Details */}
				<div>
					<span className="text-sm text-gray-500">{product.category}</span>
					<h1 className="text-3xl font-bold mt-2">{product.title}</h1>

					<div className="flex items-center gap-2 mt-2">
						<div className="flex text-yellow-400">
							{[...Array(5)].map((_, i) => (
								<FaStar key={i} />
							))}
						</div>
						<span className="text-sm text-gray-500">({product.rating})</span>
					</div>

					<div className="my-4">
						{product.oldPrice && (
							<del className="text-lg text-gray-400">
								₦{product.oldPrice.toLocaleString()}
							</del>
						)}
						<p className="text-3xl font-bold text-pink-500">
							₦{product.price.toLocaleString()}
						</p>
					</div>

					<p className="text-gray-600 mb-4">{product.description}</p>

					<span
						className={`font-semibold ${product.countInStock > 0 ? "text-green-600" : "text-red-600"}`}
					>
						{product.countInStock > 0 ?
							`In Stock: ${product.countInStock}`
						:	"Out of Stock"}
					</span>

					{/* Quantity Selector */}
					<div className="flex items-center gap-4 my-4">
						<span>Quantity:</span>
						<div className="flex items-center border rounded">
							<button
								onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
								className="px-3 py-1"
							>
								-
							</button>
							<span className="px-4">{qty}</span>
							<button onClick={() => setQty(qty + 1)} className="px-3 py-1">
								+
							</button>
						</div>
					</div>

					<button
						onClick={handleAddToCart}
						disabled={product.countInStock === 0}
						className="w-full bg-pink-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-pink-600 transition disabled:bg-gray-300"
					>
						<FaShoppingCart /> Add to Cart
					</button>
				</div>
			</div>

			{/* Description Section */}
			<div className="mt-8 bg-white p-6 rounded-lg shadow">
				<h2 className="text-xl font-bold mb-3">Product Details</h2>
				<p className="text-gray-600">{product.description}</p>
			</div>
		</div>
	);
}
