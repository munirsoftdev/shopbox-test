"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Home, User, Settings, Menu, Tag, Search, X } from "lucide-react";
import { useShop } from "../context/shopContext";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
	const router = useRouter();
	const { cartCount, search, setSearch } = useShop(); // ✅ USE GLOBAL

	const [selected, setSelected] = useState("");
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const targetUrl = e.target.value;
		if (targetUrl) {
			router.push(targetUrl);
			setSelected("");
			setMobileOpen(false);
		}
	};

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (search) {
			// ✅ USE GLOBAL SEARCH
			router.push(`/search?q=${encodeURIComponent(search)}`);
			setMobileOpen(false);
		}
	};

	return (
		<header className="bg-gray-50 shadow sticky top-0 z-50 border-b">
			<div className="container mx-auto px-4 py-3">
				{/* 
					MAIN NAV CONTAINER:
					- Mobile: Stays as a flex-col layout (Logo/Icons on top, search bar on bottom).
					- Desktop (sm and up): Shifts to flex-row layout aligning everything in a single line.
				*/}
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
					{/* Logo & Mobile Action Buttons */}
					<div className="flex items-center justify-between gap-3 shrink-0">
						{/* Logo */}
						<Link href="/" className="flex items-center gap-2 shrink-0">
							<h3 className="text-3xl font-extrabold text-zinc-600">
								Shop<span className="text-pink-700">Box</span>
							</h3>
						</Link>

						{/* Icons (Cart, Account, Mobile Menu Toggle) */}
						<div className="flex items-center gap-2 sm:hidden">
							<Link
								href="/pages/cart"
								className="relative text-gray-700 hover:text-pink-600 p-2"
							>
								<FaShoppingCart size={22} />
								<span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
									{cartCount}
								</span>
							</Link>
							<Link
								href="/pages/user"
								className="text-gray-700 hover:text-pink-600 p-2"
							>
								<User size={22} />
							</Link>
							{/* Burger Menu visible ONLY on mobile/tablet */}
							<button
								onClick={() => setMobileOpen(!mobileOpen)}
								className="p-2 hover:bg-gray-100 rounded-lg md:hidden"
								aria-label="Toggle menu"
							>
								{mobileOpen ?
									<X size={24} className="text-red-400" />
								:	<Menu size={24} className="text-black" />}
							</button>
						</div>
					</div>

					{/* Search Bar (Centered on Desktop, acts as row-2 on Mobile) */}
					<div className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
						<form
							onSubmit={handleSearch}
							className="flex items-center relative w-full"
							id="form"
						>
							<Search
								className="absolute left-3 text-gray-400 pointer-events-none"
								size={18}
							/>
							<input
								type="search"
								name="search"
								placeholder="Search products..."
								className="w-full pl-10 pr-20 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-pink-300"
								required
								onChange={(e) => setSearch(e.target.value)}
							/>
							<button
								type="submit"
								className="absolute right-1 bg-pink-700 text-white px-4 py-1.5 rounded-full text-sm hover:bg-pink-600 transition"
							>
								Search
							</button>
						</form>
					</div>

					{/* Desktop Navigation Links (Hidden on Mobile/Tablet, visible on Desktop) */}
					<nav className="hidden md:flex items-center gap-6 shrink-0">
						<Link
							href="/"
							className="flex items-center gap-2 text-black hover:text-pink-600"
						>
							<Home size={18} />
							<span className="text-sm font-medium">Home</span>
						</Link>

						<div className="flex items-center gap-2 text-black">
							<Tag size={18} />
							<select
								value={selected}
								className="text-sm bg-transparent cursor-pointer focus:outline-none hover:text-pink-600"
								onChange={handleCategoryChange}
								aria-label="Shop categories"
							>
								<option value="" disabled>
									products
								</option>
								<option value="/products/furniture">Furniture</option>
								<option value="/products/headSets">HeadSets</option>
								<option value="/products/JewelriesAndAccessories">
									Jewelries&Accessories
								</option>
								<option value="/products/laptops">Laptops</option>
								<option value="/products/memoryCard">Memory Card</option>
								<option value="/products/menCloths">Men&apos;s clothing</option>
								<option value="/">Phones</option>
								<option value="/products/powerbank">Powerbank</option>
								<option value="/products/watches">Watches</option>
								<option value="/products/WomenCloths">
									Women&apos;s clothing
								</option>
							</select>
						</div>

						<Link
							href="/pages/cart"
							className="relative text-black hover:text-pink-600 p-2"
						>
							<FaShoppingCart size={22} />
							<span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
								{cartCount}
							</span>
						</Link>
						<Link
							href="/pages/user"
							className="text-black hover:text-pink-600 p-2"
						>
							<User size={22} />
						</Link>
						<Link
							href="/pages/admin"
							className="flex items-center gap-2 text-black hover:text-pink-600"
						>
							<Settings size={18} />
							<span className="text-sm font-medium">Admin</span>
						</Link>
					</nav>
				</div>

				{/* MOBILE MENU DROPDOWN */}
				{mobileOpen && (
					<div className="md:hidden mt-4 pb-2 border-t pt-4 space-y-3">
						<Link
							href="/"
							onClick={() => setMobileOpen(false)}
							className="flex items-center gap-3 px-2 py-2 hover:text-pink-600 rounded-lg"
						>
							<Home size={20} /> Home
						</Link>
						<div className="flex items-center gap-2 px-2">
							<Tag size={18} />
							<select
								value={selected}
								className="w-full text-base bg-transparent cursor-pointer py-2 focus:outline-none hover:text-pink-600"
								onChange={handleCategoryChange}
								aria-label="Shop categories"
							>
								<option value="" disabled>
									Products
								</option>
								<option value="/products/furniture">Furniture</option>
								<option value="/products/headSets">HeadSets</option>
								<option value="/products/JewelriesAndAccessories">
									Jewelries&Accessories
								</option>
								<option value="/products/laptops">Laptops</option>
								<option value="/products/memoryCard">Memory Card</option>
								<option value="/products/menCloths">Men&apos;s clothing</option>
								<option value="/">Phones</option>
								<option value="/products/powerbank">Powerbank</option>
								<option value="/products/watches">Watches</option>
								<option value="/products/WomenCloths">
									Women&apos;s clothing
								</option>
							</select>
						</div>

						<Link
							href="/pages/admin"
							onClick={() => setMobileOpen(false)}
							className="flex items-center gap-3 px-2 py-2 hover:text-pink-600 rounded-lg"
						>
							<Settings size={20} /> Admin
						</Link>
					</div>
				)}
			</div>
		</header>
	);
}
