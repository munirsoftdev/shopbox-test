"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { Phone } from "../data/phones";
import { FaShoppingCart } from "react-icons/fa";

type CartItem = Phone & { quantity: number };

interface ShopContextType {
	cart: CartItem[];
	cartCount: number; // total items
	addToCart: (product: Phone) => void;
	removeFromCart: (id: string) => void;
	increaseQty: (id: string) => void;
	decreaseQty: (id: string) => void;
	cartTotal: number;
	search: string;
	setSearch: (s: string) => void;
	clearCart: () => void;
	toast: string | null;
	showToast: (message: string) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider = ({ children }: { children: ReactNode }) => {
	const [cart, setCart] = useState<CartItem[]>([]);
	const [search, setSearch] = useState("");
	const [toast, setToast] = useState<string | null>(null);

	const showToast = (message: string) => {
		setToast(message);
		setTimeout(() => setToast(null), 3000);
	};

	const addToCart = (product: Phone) => {
		if (product.countInStock === 0) return;

		setCart((prev) => {
			const existing = prev.find((item) => item.id === product.id);
			if (existing) {
				// if already in cart, increase qty
				showToast(`${product.title} quantity updated`);
				return prev.map((item) =>
					item.id === product.id ?
						{ ...item, quantity: item.quantity + 1 }
					:	item,
				);
			} else {
				showToast(`${product.title} added to cart`);
				// add new with qty 1
				return [...prev, { ...product, quantity: 1 }];
			}
		});
	};

	const removeFromCart = (id: string) => {
		setCart((prev) => prev.filter((item) => item.id !== id));
	};

	const increaseQty = (id: string) => {
		setCart((prev) =>
			prev.map((item) =>
				item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
			),
		);
	};

	const decreaseQty = (id: string) => {
		setCart(
			(prev) =>
				prev
					.map((item) =>
						item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
					)
					.filter((item) => item.quantity > 0), // remove if 0
		);
	};

	const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
	const cartTotal = cart.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0,
	);
	const clearCart = () => {
		setCart([]);
	};

	return (
		<ShopContext.Provider
			value={{
				cart,
				cartCount,
				addToCart,
				removeFromCart,
				increaseQty,
				decreaseQty,
				cartTotal,
				search,
				setSearch,
				clearCart,
				toast,
				showToast,
			}}
		>
			{children}
			<Toast message={toast} />
		</ShopContext.Provider>
	);
};
const Toast = ({ message }: { message: string | null }) => {
	if (!message) return null;
	return (
		<div className="fixed bottom-5 right-5 bg-black text-white px-4 py-3 rounded-lg flex items-center gap-2 animate-slide-up z-50">
			<FaShoppingCart />
			<span>{message}</span>
		</div>
	);
};
export const useShop = () => {
	const context = useContext(ShopContext);
	if (!context) throw new Error("useShop must be used within ShopProvider");
	return context;
};
