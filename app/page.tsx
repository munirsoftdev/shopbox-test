"use client"; // 1. Need this for useShop and onClick
import Image from "next/image";
import Link from "next/link";
import {
	FaShoppingCart,
	FaStar,
	FaStarHalfAlt,
	FaRegStar,
} from "react-icons/fa"; // 2. Added star icons
import { phones, Phone } from "./data/phones"; // 3. Import your data + type
import { useShop } from "./context/shopContext"; // 4. Import context

// 5. StarRating component
const StarRating = ({ rating }: { rating: number }) => {
	return (
		<div className="flex">
			{[...Array(5)].map((_, i) => {
				if (rating >= i + 1)
					return <FaStar key={i} className="text-yellow-400 text-sm" />;
				if (rating >= i + 0.5)
					return <FaStarHalfAlt key={i} className="text-yellow-400 text-sm" />;
				return <FaRegStar key={i} className="text-gray-300 text-sm" />;
			})}
		</div>
	);
};

export default function PhonesPage() {
	// 6. Renamed from Home
	const { addToCart, search } = useShop(); // 7. Get from context

	// 8. Create filteredProducts
	const filteredProducts = phones.filter((product) =>
		product.title.toLowerCase().includes(search.toLowerCase()),
	);

	const handleAddToCart = (product: Phone) => {
		// 9. Add function
		addToCart(product);
	};

	return (
		<div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<main className="container mx-auto px-4 py-8">
				<h2 className="text-xl font-bold mb-6">Mobile Phones</h2>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
					{filteredProducts.map((product) => (
						<div
							key={product.id}
							className="bg-white rounded-lg shadow hover:shadow-lg transition p-3 md:p-4 flex flex-col h-full justify-between"
						>
							<div className="flex flex-col flex-1">
								<Link href={`/phones/${product.id}`}>
									{/* FIX: Reduced heights for mobile layout safety */}
									<div className="relative w-full h-32 sm:h-40 md:h-48 mb-3">
										<Image
											src={product.image}
											alt={product.title}
											fill
											className="object-contain"
											sizes="(max-width: 768px) 50vw, 25vw"
										/>
									</div>
								</Link>
								<span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">
									{product.category}
								</span>
								<h3 className="font-semibold text-sm md:text-base text-gray-800 mt-1 line-clamp-2 min-h-[2.5rem]">
									{product.title}
								</h3>
								<div className="flex items-center gap-1 md:gap-2 mt-1">
									<StarRating rating={product.rating} />
									<span className="text-[10px] md:text-xs text-gray-500">
										({product.rating})
									</span>
								</div>
								<p className="text-[11px] md:text-xs text-gray-600 mt-1 line-clamp-2">
									{product.description}
								</p>
								{/* 10. FIX: stock -> countInStock */}
								<span
									className={`text-[11px] md:text-xs mt-1 font-medium ${product.countInStock > 5 ? "text-green-600" : "text-red-600"}`}
								>
									{product.countInStock > 0 ?
										`In Stock: ${product.countInStock}`
									:	"Out of Stock"}
								</span>
							</div>

							{/* Actions wrapper anchored to the bottom */}
							<div className="mt-auto pt-3 border-t border-gray-50">
								<div>
									{product.oldPrice && (
										<del className="text-xs text-gray-400 block">
											₦{product.oldPrice.toLocaleString()}
										</del> // 11. FIX: Naira symbol
									)}
									<p className="text-base md:text-lg font-bold text-gray-800">
										₦{product.price.toLocaleString()}
									</p>
								</div>
								<button
									onClick={() => handleAddToCart(product)}
									disabled={product.countInStock === 0} // 13. FIX: countInStock
									className="mt-2.5 w-full bg-pink-700 text-white py-2 text-xs md:text-sm font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-pink-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
								>
									<FaShoppingCart />{" "}
									<span className="whitespace-nowrap">Add to Cart</span>
								</button>
							</div>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}
